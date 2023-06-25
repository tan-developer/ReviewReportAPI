import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  // Import Entity 
  imports : [TypeOrmModule.forFeature([
    User
  ])]
})
export class UsersModule {}
