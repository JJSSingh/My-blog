import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Note, NoteDocument} from './schemas/note.schema'

@Injectable()
export class NotesService {

  //Constructor - 
  constructor(
    @InjectModel(Note.name) private readonly NoteModel: Model<NoteDocument>,
  )
  {}

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    return this.NoteModel.create(createNoteDto);
  }

  async findAll(): Promise<Note[]>{
    return this.findAll().exec();
  }

  findOne(id: string): Promise<Note> {
    return this.findOne({ _id: id}).exec();
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
