import React from "react";

class Mark  extends React.Component{

    checkmark(e){
        var a = e.target.txt1.value;
        var b = e.target.txt2.value;
        var c = e.target.txt3.value;
        var d = e.target.txt4.value;
        var e = e.target.txt5.value;
        var total = parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e);
        var perc = total / 5;
        if(perc > 40){
            alert("Total is "+total + ". % is "+perc+". You are Pass.")
        }
        else{
            alert("Total is "+total + ". % is "+perc+". You are Fail.")
        }



    }
    render(){
        return(
            <form onSubmit={this.checkmark.bind(this)}>
               Mark 1: <input type="text" name="txt1"/><br></br>
               Mark 2: <input type="text" name="txt2"/><br></br>
               Mark 3: <input type="text" name="txt3"/><br></br>
               Mark 4: <input type="text" name="txt4"/><br></br>
               Mark 5: <input type="text" name="txt5"/><br></br>
               <input type="submit"/>
            </form>
        )
    }
}

export default Mark;