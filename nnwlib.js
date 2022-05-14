// Neuron Function
function nrn(inputs, weights) {
    var out = 0;
    for (var i = 0; i < inputs.length; i++) {
        out += inputs[i]*weights[i];
    }
    return out/(inputs.length);
}

// Network Function
function nnw(layers, train, input ,learn=100) {
    // get datas
    var all_weights = [];
    var input = layers[input];
    var hidden = layers[hidden];
    var output = layers[output];
    
    //rand function
    function rand(max) {
    	max = max*10;
  return Math.floor(Math.random() * max)/10;
}
    
    // add neurons for get weights
    var nrns = input+output;
     for (var i = 0; i < hidden.length; i++) {
         nrns += hidden[i];
     }
     
     // training
     for (var i = 0; i < learn; i++) {
         
         
         
     }
         
     
     
     
     
     
}
