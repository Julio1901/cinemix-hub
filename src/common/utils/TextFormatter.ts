
export class TextFormatter {

     static handleWithLargeTextNameDisplay = (name: string, maxTextSize: number) : string =>{
        
        if(name.length <= maxTextSize){
            return name
        }

        return  name.substring(0, (maxTextSize -1)).concat('...')
    }

}

