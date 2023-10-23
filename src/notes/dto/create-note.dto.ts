import { ApiProperty } from '@nestjs/swagger'

export class CreateNoteDto {
    @ApiProperty({example: 'Title of the Note'})
    readonly title: string;
   
    @ApiProperty({example: 'Description of the Note'})
    readonly description: string;

    @ApiProperty({example: 'Type of the note'})
    readonly type: string;
}


