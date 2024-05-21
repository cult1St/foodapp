import { Items } from "./Items";

export const Objects = ()=>{
    const objects = [
        {
          "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
          "author": "Thomas Edison, type.fit"
        },
        {
          "text": "You can observe a lot just by watching.",
          "author": "Yogi Berra, type.fit"
        },
        {
          "text": "A house divided against itself cannot stand.",
          "author": "Abraham Lincoln, type.fit"
        },
        {
          "text": "Difficulties increase the nearer we get to the goal.",
          "author": "Johann Wolfgang von Goethe, type.fit"
        },
        {
          "text": "Fate is in your hands and no one elses",
          "author": "Byron Pulsifer, type.fit"
        },
        {
          "text": "Be the chief but never the lord.",
          "author": "Lao Tzu, type.fit"
        },
        {
          "text": "Nothing happens unless first we dream.",
          "author": "Carl Sandburg, type.fit"
        },
        {
          "text": "Well begun is half done.",
          "author": "Aristotle, type.fit"
        },
        {
          "text": "Life is a learning experience, only if you learn.",
          "author": "Yogi Berra"
        },
        {
          "text": "Self-complacency is fatal to progress.",
          "author": "Margaret Sangster, type.fit"
        },
        {
          "text": "Peace comes from within. Do not seek it without.",
          "author": "Buddha, type.fit"
        },
        {
          "text": "What you give is what you get.",
          "author": "Byron Pulsifer, type.fit"
        },
        {
          "text": "We can only learn to love by loving.",
          "author": "Iris Murdoch, type.fit"
        },
        {
          "text": "Life is change. Growth is optional. Choose wisely.",
          "author": "Karen Clark, type.fit"
        },
        {
          "text": "You'll see it when you believe it.",
          "author": "Wayne Dyer, type.fit"
        },
        {
          "text": "Today is the tomorrow we worried about yesterday.",
          "author":  "type.fit"
        }
      ];
      const d2 = (x)=>{
        var double = 2*x;
        alert(double)
      };
    return(
        <>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>

                    <th>S/N</th>
                    <th>Author</th>
                    <th>Quote</th>
                </tr>
            </thead>
            <tbody>

          {
            objects.map((val,index)=>{
                return(
                    <Items val = {val} i = {index}/>
                )
            })
          }
            </tbody>

        </table>
          <div className="col-6">
          <div className="m-3"><input type="text" className="form-control" id="texts" /></div>
         <div className="m-3"><button className="btn btn-primary" onClick={function(){
          let numb = document.getElementById("texts").value;
          d2(numb)
         }}>Click Me</button></div>
          </div>
        </>
    )
    
   

}