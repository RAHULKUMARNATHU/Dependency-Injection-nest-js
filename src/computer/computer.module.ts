import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';
import { ComputerController } from './computer.controller';





@Module({
  imports:[DiskModule , CpuModule ],
  controllers: [ComputerController]
})
export class ComputerModule {}
