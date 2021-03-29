class Ducktypium {
    constructor(color) {
        if (color != "red" && color != "blue" && color != "yellow"){
            alert("Only red, blue, or yellow are allowed as colors!");
        } else {
            this.color = color;
        }
        this.calibrationSequence = [];
    }
    
    refract(color) {
        if (color != "red" && color != "blue" && color != "yellow"){
            alert("Only red, blue, or yellow are allowed as colors!");
        } else {
            if (this.color == color) {
                return color;
            } else {
                if (this.color == "red" || color == "red") {
                    if (this.color == "blue" || color == "blue") {
                        return "purple";
                    } else {
                        return "orange";
                    }
                } else {
                    return "green";
                }
            }
        }
    }

    calibrate(arr) {
        arr.sort();
        this.calibrationSequence = arr.map(item => item*3);
    }
    
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const dt = new Ducktypium('red');
  
  console.log(dt.color); // prints 'red'
  
  console.log(dt.refract('blue')); // prints 'purple'
  console.log(dt.refract('red')); // prints 'red'
  
  dt.calibrate([3, 5, 1]);
  
  console.log(dt.calibrationSequence); // prints [3, 9, 15]