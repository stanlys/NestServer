import { Controller, Get } from "@nestjs/common";
import { AppService } from "./_app.service";

@Controller('/api')
export class AppController {

  constructor(private appService: AppService){}

  @Get('/users')
  getUsers() {
    return this.appService.getUsers();
  }
}