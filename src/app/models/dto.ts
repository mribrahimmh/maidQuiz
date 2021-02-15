export class Dto {
  constructor(){
    this.data =[];
    this.page = -1;
    this.per_page =-1;
    this.support = {};
    this.total =-1;
    this.total_pages =-1;
  }
  data: any[];
  page: number;
  per_page: number;
  support: any;
  total: number;
  total_pages: number
}
