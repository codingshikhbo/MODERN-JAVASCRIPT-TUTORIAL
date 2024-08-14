class parents{
    assets1(){
        console.log('eta amar assets');
    }
    assets2(){
        console.log('eta vaiyar assets');
    }
}
class amar extends parents{
    myAssets(){
        super.assets1()
        super.assets2()
    }
}
let newAssets = new amar()
newAssets.myAssets()
