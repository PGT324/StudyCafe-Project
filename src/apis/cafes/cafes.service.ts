import { Injectable } from '@nestjs/common';
import { Cafe } from './entities/cafe.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCafesDto } from './dto/create-cafes.dto';
import { Facility } from '../facilities/entities/facility.entity';
import { UpdateCafesDto } from './dto/update-cafes.dto';

@Injectable()
export class CafesService {
  constructor(
    @InjectRepository(Cafe)
    private readonly cafeRepository: Repository<Cafe>,
    @InjectRepository(Facility)
    private readonly facilityRepository: Repository<Facility>, //
  ) {}
  async fetchCafes(): Promise<Cafe[]> {
    return this.cafeRepository.find({
      relations: ['facility'],
    });
  }

  async createCafe(createCafeDto: CreateCafesDto): Promise<string> {
    const result = await this.cafeRepository.save(createCafeDto);
    if (result) {
      return '카페 등록 성공!';
    } else {
      return '카페 등록 실패!';
    }
  }

  async addFacility(cafeId: string, facilityId: string): Promise<string> {
    const facility = await this.facilityRepository.findOne({
      where: { id: facilityId },
    });
    const cafe = await this.cafeRepository.findOne({ where: { id: cafeId } });
    cafe.facility = [facility];
    const result = await this.cafeRepository.save({
      id: cafe.id,
      ...cafe,
    });
    if (result) {
      return '카페에 시설이 등록되었습니다!';
    } else {
      return '카페에 시설등록이 실패하였습니다.';
    }
  }

  async updateCafe(updateCafeDto: UpdateCafesDto): Promise<string> {
    try {
      this.cafeRepository.save(updateCafeDto);
      return '정보 수정 성공!';
    } catch (error) {
      throw new Error('정보 수정 실패!');
    }
  }

  async deleteCafe(id: string): Promise<string> {
    const result = this.cafeRepository.delete({ id: id });
    if ((await result).affected) {
      return '정보 삭제 성공!';
    } else {
      throw new Error('정보 삭제 실패!');
    }
  }
}
