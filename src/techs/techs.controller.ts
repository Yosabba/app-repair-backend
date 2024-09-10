import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('techs')
export class TechsController {
  @Get()
  getAlltechs(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    return 'this is dominic';
  }

  @Post('dominic')
  createNewTech() {}

  @Get('newtechs')
  getNewTechs(@Body() input: any) {
    return `this is a type of input ${input}`;
  }
}
