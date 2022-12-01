import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';

@Module({
  controllers: [ComputerController]
})
export class ComputerModule {}
