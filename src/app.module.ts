import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserUseCasesModule } from './use-cases/user/user-use-case.module';
import { DataServicesModule } from './frameworks/data-services/data-services.module';
import { AuthUseCasesModule } from './use-cases/authentication/authenticate-use-case.module';
import { AuthController } from './controllers/auth.controller';
import { APP_GUARD } from '@nestjs/core';
import { HelperModule } from './core/helpers/helper.module';
import { AuthGuard } from './core/auth.guard';

@Module({
  imports: [
    HelperModule,
    DataServicesModule,
    AuthUseCasesModule,
    UserUseCasesModule
  ],
  controllers: [
    AuthController,
    UserController
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    DataServicesModule],
})
export class AppModule { }