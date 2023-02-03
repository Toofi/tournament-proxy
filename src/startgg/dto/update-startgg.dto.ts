import { PartialType } from '@nestjs/mapped-types';
import { CreateStartggDto } from './create-startgg.dto';

export class UpdateStartggDto extends PartialType(CreateStartggDto) {}
