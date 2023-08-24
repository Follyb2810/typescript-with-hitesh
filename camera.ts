interface TakePhoto {
    cameramode:string,
    filter:string,
    burst:number
}


class instagrams implements TakePhoto {
    constructor(
      public  cameramode:string,
       public filter:string,
       public burst:number
    ){}
}
class Youtubebe implements TakePhoto {
    constructor(
      public  cameramode:string,
       public filter:string,
       public burst:number
    ){}
}