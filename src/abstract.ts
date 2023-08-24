abstract class TakePhoto {
  constructor(
    public cameraMode:String,
    public filter:string
  ){}
  abstract getSepaia():void
  getReel():number{
    return 8
  }
}
class intagram extends TakePhoto{
  constructor(
    public cameraMode:String,
    public filter:string,
    public burst :number 
  ){
    super(cameraMode,filter)
  }
  getSepaia(): void {
    console.log('serpis')
  }
}
const foll = new intagram('folly','folly',3)
foll.getReel()