# Testing moodle  using Provengo
This directory contains the Provengo project for testing moodle.


## Running the tests
To run a single random test, run:
```shell 
provengo run helloprovengo
```

## Tool Documentation
See [Provengo README](helloprovengo/README.md) for a short description of the tool and how to use it.

For a full documentation go to [https://docs.provengo.tech](https://docs.provengo.tech)

## How we created the test model:
1. We started by creating the following files: [actions.js](helloprovengo/spec/js/actions.js)
2. We then ran the following command to generate the test model:
```shell
provengo analyze -f PDF helloprovengo   
```
3. We repeated steps 1-2 until we were satisfied with the generated model.
4. We used the following command to run the tests:
```shell
provengo run --show-sessions helloprovengo
```
5. We repeated steps 1-4 until we were satisfied with the result.
6. We didn't record a video of the tests running because we defined the selenium server so that each server prints to the console its outputs and doesn't use GUI.
7. We copied the generated graph of the model to a file named [model.pdf](helloprovengo/products/run-source/testSpace.pdf) inside the submission-files directory.

### Test files
 the set of possible actions with expected behavior is in [actions.js](helloprovengo/spec/js/actions.js). 



## How we tested the system
See the last two lessons of the [Provengo Course](https://provengo.github.io/Course/Online%20Course/0.9.5/index.html) for a detailed explanation of the following steps.


1. We sampled the state space of the system using the following command that created a [samples.json](helloprovengo/products/run-source/samples.json) file:
```shell
provengo sample --overwrite --size 10 helloprovengo
```
2. Given this sample, we created an ensemble (test suite) using the following commands that created an [ensemble.json](helloprovengo/products/run-source/ensemble.json) file:
```shell
provengo ensemble --size 5 helloprovengo
```
3. We repeated the last two steps, changing the two size parameters, until we were satisfied with the grade of the generated test suites.

4. We visualized the specification, and highlighted the traces in the optimized test suite create by the previous command and copied the output to [model.pdf](helloprovengo/products/run-source/testSpace.pdf).
```shell
provengo analyze -f pdf --highlight products/run-source/ensemble.json helloprovengo
```
5. We ran the generated test suites using the following command:
```shell
provengo run -s products/run-source/ensemble.json helloprovengo 
```
6. We generated a report of the test-suite run and looked for errors. If errors were found and the reason was a bug in the model, we fixed the model and repeated the steps 2--7. Unfortunately, we couldn't track bugs because we found new bugs every hour when running the program. We upload one version to tracking bugs here [index.html](helloprovengo/products/reports/index.html) using the following command :
```shell
provengo report helloprovengo
```
Due to a lack of time, we weren't able to test our program on a two-way criterion.
