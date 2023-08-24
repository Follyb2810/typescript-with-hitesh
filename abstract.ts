abstract class AbstractPhoto {
    constructor(
     public cameramode:string,
     public filetr:string
    ){

    }
    abstract getSepai():void

}

class instagram extends AbstractPhoto{
    constructor(
        public cameramode:string,
        public filter:string
    ){
        super(cameramode,filter)
    }
    getSepai(): void {
       console.log('go') 
    }
}
const follya = new instagram('tesr','geli')