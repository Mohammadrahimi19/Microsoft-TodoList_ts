declare module 'jalaali-moment' {
    import { Moment } from 'moment';
  
    interface JalaaliMoment extends Moment {
      jalali(): JalaaliMoment;
      locale(lang: string): JalaaliMoment;
      // Add any other methods you might use
    }
  
    function jalaaliMoment(date?: string | number | Date): JalaaliMoment;
  
    export default jalaaliMoment;
  }
  