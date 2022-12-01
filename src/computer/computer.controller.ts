import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private CpuService: CpuService,
    private DiskService: DiskService,
  ) {}

  @Get()
  run() {
    return [this.CpuService.compute(5, 10), this.DiskService.getData()];
  }
}
