# Waves
3D Secure Hypothetical Project made with React Native. This Project was made with react native and is only for demonstration purposes. What the idea behind this Waves format was adding an additional layer of security for the 3D secure by implementing more ways for authentication. 

The details and the protocols of Waves are written in high detail, in a IEEE Conference Paper format in the "Research Paper about Waves.pdf" File in the root direcory.

# How to install

Install the source file and run `npm install`in the directory. Afterwards you can start the application by expo start.

# Brief Summary

![Image of FlowChart](https://github.com/semihyonet/Waves/blob/master/Images/3D%20Secure%20FlowChart.png)


This application will be responsible with holding the payment details of the user. The app creditencials are needed as a 3rd party in the 3D Secure System. Therefore when there is a transaction or a authentication approval request on the 3D Secure System with the Waves Application, The 3D Secure System connects with Waves Server and sends the transaction details. Waves application configures a specific Wave protocol for this instance of a purchase. The Waves lack variety right now since I only implemented 5 Wave's becuase this is only the demonstration. In the feature there will be more variety to waves and more variables to pick a Wave from.



The Waves are picked according to these 3 very important variables.
* Frequency of use
* Amount of the transaction
* IP Address of the User

After the decision by this protocol a wave is selected with different authentication methods according to the situation. Example of this is the following image:

![Image of WaveSchema](https://github.com/semihyonet/Waves/blob/master/Images/WAVE%20SCHEMA.png)


![Video of Waves 1](https://github.com/semihyonet/Waves/blob/master/Videos/Example1.mov)
![Video of Waves 2](https://github.com/semihyonet/Waves/blob/master/Videos/Example2.mov)
