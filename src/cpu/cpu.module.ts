import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';

@Module({
  providers: [CpuService]
})
export class CpuModule {}
