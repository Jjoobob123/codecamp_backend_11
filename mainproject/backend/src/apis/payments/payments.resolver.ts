import { UseGuards } from '@nestjs/common';
import { Args, Context, Int, Mutation, Resolver } from '@nestjs/graphql';
import { IContext } from 'src/commons/interfaces/context';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guards';
import { Payment } from './entities/payments.entity';
import { PaymentsService } from './payments.service';

@Resolver()
export class PaymentsResolver {
  constructor(
    private readonly paymentsService: PaymentsService, //
  ) {}

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Payment)
  createPayment(
    @Args('impUid') impUid: string, //
    @Args({ name: 'amount', type: () => Int }) amount: number,

    @Context() context: IContext,
  ): Promise<Payment> {
    const user = context.req.user;
    return this.paymentsService.createForPayment({ impUid, amount, user });
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Payment)
  cancelPointPayment(
    @Args('impUid') impUid: string, //
    @Context() context: IContext,
  ) {
    const user = context.req.user;
    this.paymentsService.cancel({ impUid, user });
  }
}
