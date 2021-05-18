const fs = require("fs");

let brain = require("brain.js");
const brain_js_net = new brain.NeuralNetwork({binaryThresh: 0.5, hiddenLayers: [3], activation: 'sigmoid'});

let tf = require('@tensorflow/tfjs-node');
function train_tf(){
    return new Promise(async function(res){
        let tf_model = tf.sequential();
        tf_model.add(tf.layers.dense({units: 10, activation: 'sigmoid',inputShape: [2]}));
        tf_model.add(tf.layers.dense({units: 1, activation: 'sigmoid',inputShape: [10]}));
        tf_model.compile({loss: 'meanSquaredError', optimizer: 'rmsprop'});
        let training_data = tf.tensor2d([[0,0],[0,1],[1,0],[1,1]]);
        let target_data = tf.tensor2d([[0],[1],[1],[0]]);
        await tf_model.fit(training_data, target_data, {epochs: 1000, verbose: 0});
        return res();
    });
}

module.exports = ({suite, spinner})=>{
    suite.add('BrainJS XOR Training, 1000 iterations', function(){
        brain_js_net.train([{input: [0, 0],output: [0]},{input: [0, 1],output: [1]},{input: [1, 0],output: [1]},{input: [1, 1],output: [0]}], {iterations: 5000});
    })
    suite.add('TensorFlow XOR Training, 1000 epochs', {
        defer: true,
        fn: function(deferred) {
            train_tf().then(function(){
                deferred.resolve();
            })
        }
    })
    return suite;
}

