import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { IFileServiceUpload } from './interfaces/files-service.interface';

@Injectable()
export class FilesService {
  async upload({ files }: IFileServiceUpload): Promise<string[]> {
    console.log(files);
    //1. 파일을 클라우드 스토리지에 저장하는 로직

    const waitedFiles = await Promise.all(files);
    console.log('👻👻👻👻👻👻', waitedFiles);

    // 1-1) 스토리지 셋팅하기
    const bucket = process.env.IMAGE_STORAGE_BUCKET;
    const storage = new Storage({
      projectId: process.env.IMAGE_STORAGE_ID,
      keyFilename: process.env.IMAGE_STORAGE_FILE,
    }).bucket(bucket);
    console.log('👻👻👻👻👻👻🦊', storage);

    // 1-2) 스토리지에 파일 올리기
    // 이걸 실핼하면 스토리지에 저장된다. 파일 읽어서 올린다. for문 안에서 await 사용하지 않는다.
    // 하지만 for문은 비효율적이므로 Promise.all 로 대체해주면 좋을거 같다.
    console.time('시간을 확인해보자');
    const results = await Promise.all(
      waitedFiles.map(
        (el) =>
          new Promise<string>((resolve, reject) => {
            el.createReadStream()
              .pipe(storage.file('origin/' + el.filename).createWriteStream())
              .on('finish', () => resolve(`${bucket}/${el.filename}`))
              .on('error', () => reject('실패'));
          }),
      ),
    );
    console.log('🐤🐤🐤🐤🐤🐤🐤🐤🐤🐤');

    console.timeEnd('시간을 확인해보자');
    console.log('파일 전송이 완료되었습니다!!!');

    return results;
  }
}
