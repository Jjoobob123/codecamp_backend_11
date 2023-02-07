// show databases
// ;

// use myproject
// ;

// show tables
// ;

// desc product
// ;

// select *
//   from product
// ;

// # MYSQL에서는 큰따옴표("")와 작은따옴표('')가 큰 차이 없으나, 다른 SQL DB는 대부분 작은따옴표를 사용
// INSERT into product(id, name, description, price)
//              values(uuid(),'마우스','정말 좋은 마우스입니다!!!',15000)
// ;

// INSERT into product(id, name, description, price)
//              values(uuid(),'노트북','최신 맥북!!',15000)
// ;

// INSERT into product(id, name, description, price)
//              values(uuid(),'셔츠','깔끔한 셔츠입니다!!!',30000)
// ;

// DELETE FROM product
// WHERE name = '셔츠'
// ;

// UPDATE product
//    set price = 18000
//  WHERE name = '마우스'
//  ;

// #=======조인 =======

// SELECT * FROM product_saleslocation;

// INSERT  into product_saleslocation (id,address,addressDetail,lat,lng,meetingTime)
//                              values(uuid(),'구로구','구로디지털단지',37.2819, 127.2837,'2023-01-10')
// ;

// UPDATE product
//    set productSaleslocationId = '2c69a612-a397-11ed-91a8-53f6d64e0429'
//  WHERE name = '마우스'
// ;

// SELECT p.id, name, price, address, addressDetail as '상세주소'
//   from product p, product_saleslocation ps
//  WHERE p.productSaleslocationId = ps.id
//  ;

// # =============== 추가기능들 ==================

// UPDATE product
//    set isSoldout = TRUE
//  where name = '노트북'
//    and price = 20000
// ;

// #============== 주석 쉽게 다는 방법 =============
// #              => UPDATE / delete 에서는 가급적 사용하지 않

// SELECT *
//   from product
//  WHERE 1 = 1
//    and name = '마우스'
//    and price  = 5000
//    and isSoldout = FALSE
//    ;
