interface TakePhone {
    cameraMode:string,
    filter:string,
    burst:number
}

interface Story {
    createStory():void 
}
class Instagram implements TakePhone {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        
    }
}

class Youtube implements TakePhone,Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short :string
    ){ }
      createStory():void{
     console.log('story care')
    }
}
