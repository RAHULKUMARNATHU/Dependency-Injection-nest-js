import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { DiskService } from './disk.service';

@Module({
  imports:[PowerModule],
  providers: [DiskService]
})
export class DiskModule {}
