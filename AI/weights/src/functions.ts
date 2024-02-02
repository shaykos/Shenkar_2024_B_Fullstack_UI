import { Data, Input } from "./types/dataTypes";

declare const brain: any;

export function createNN() {
    // Create a new neural network
    const net = new brain.NeuralNetwork({
        hiddenLayers: [3],
        inputSize: 3,
        outputSize: 1,
    });

    // Weather decision training data
    //temp -> 50%
    //humidity -> 30% 
    //wind -> 20% 
    //y = 0.5t + 0.3h + 0.2w
    const trainingData = [
        { input: { temperature: 25, humidity: 60, wind: 10 }, output: { goForRun: 1 } },
        { input: { temperature: 18, humidity: 50, wind: 5 }, output: { goForRun: 0 } },
        { input: { temperature: 30, humidity: 70, wind: 15 }, output: { goForRun: 1 } },
        { input: { temperature: 12, humidity: 45, wind: 8 }, output: { goForRun: 0 } },
        { input: { temperature: 10, humidity: 40, wind: 5 }, output: { goForRun: 0 } },
        { input: { temperature: 20, humidity: 55, wind: 12 }, output: { goForRun: 1 } },
        { input: { temperature: 15, humidity: 60, wind: 8 }, output: { goForRun: 0 } },
        { input: { temperature: 18, humidity: 50, wind: 5 }, output: { goForRun: 0 } },
    ];

    let newData = normalizeData(trainingData);

    // Train the neural network
    net.train(newData, {
        logPeriod: 100,
        log: (stats: any) => console.log(stats)
    });

    // Make predictions
    const decision1 = net.run(normalizeInput({ temperature: 33, humidity: 70, wind: 12 }));
    // Expected output: { goForRun: 1 }

    const decision2 = net.run(normalizeInput({ temperature: 10, humidity: 40, wind: 5 }));
    // Expected output: { goForRun: 0 }

    // Display predictions
    console.log('Decision for {30, 70, 12}:', decision1);
    console.log('Decision for {10, 40, 5}:', decision2);

    (document.querySelector('#app') as HTMLDivElement).innerHTML = brain.utilities.toSVG(net);

}

function normalizeData(trainingData: Array<Data>): Array<Data> {

    //temp -> 50% --> 0.5
    //humidity -> 30% --> 0.3
    //wind -> 20% --> 0.2
    // { input: { temperature: 25, humidity: 60, wind: 10 }, output: { goForRun: 1 } },
    trainingData.forEach((data) => {
        data.input.temperature = data.input.temperature * 0.5
        data.input.humidity = data.input.humidity * 0.3
        data.input.wind = data.input.wind * 0.2
    });

    return trainingData
}

function normalizeInput(input: Input): Input {

    //temp -> 50% --> 0.5
    //humidity -> 30% --> 0.3
    //wind -> 20% --> 0.2
    // { input: { temperature: 25, humidity: 60, wind: 10 }, output: { goForRun: 1 } },

    input.temperature = input.temperature * 0.5
    input.humidity = input.humidity * 0.3
    input.wind = input.wind * 0.2

    return input;
}