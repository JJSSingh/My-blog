import {Schema, Prop,SchemaFactory } from '@nestjs/mongoose'
import exp from 'constants';
import {Document } from 'mongoose'

export type NoteDocument = Note & Document;

@Schema()
export class Note {
    @Prop()
    title: string;

    @Prop()
    text: string;

    @Prop()
    type: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
