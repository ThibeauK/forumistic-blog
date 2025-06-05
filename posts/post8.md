# Tutorial: reusing lithium ion batteries



Current electronic devices primarily use lithium-ion batteries as an energy source. These components have serious environmental hazards and threaten the sustainability of human life. <a href="#bibliography">[9]</a> Their extensive usage leads to enormous amounts of electronic waste. A battery's life span depends on the magnitude of the device. Nonetheless, most of them are still viable for reuse. 



During the creation of my graphic computing tool it became apparent that there was a personal desire to make it portable and rechargeable. Recognising the harmful nature of lithium ion batteries I gravitated towards an unused 20000 mAh powerbank. Previously perceived as a defective gadget. Its internal parts were made up of 8 18650 3.6V 9.0Wh lithium-ion batteries and a control circuit that regulated the flow of electricity. After breaching the outer shell it became apparent that its internal circuitry was faulty. Outputting only 3.6V instead of the 5V current small devices consume. The creation of a sustainable internal battery would be feasible through the modification of its electronic discharge.



Components used: 

-    8 lithium ion batteries 

-    8A BMS HX-2S-D2 (Battery protection board) 

-    MT3608 (Boost converter module) 

-    5V S8V9F5 (Step-up/step-down voltage regulator) 

-    Switch (optional)



*This list does not include links to external stores. The consumer has a duty to be conscious when purchasing electronic supplies. Try and outsource from local repositories or obtain them from regional web-stores.* 



The first task is to re-solder the batteries. Currently all 8 are wired parallel, emitting 3.6V. To gain a higher discharge we need to reposition them in a series of 2. <a href="#bibliography">[10]</a> Duplicating the amount of voltage. The capacity of the batteries remains unchanged. 



Lithium ion batteries are prone to hazardous conditions like overcharging, deep discharge and overheating. Therefore a battery protection board is an essential component to safeguard the battery cells and ensure proper charging. <a href="#bibliography">[11]</a> Specific electronic conditions require specific boards. This project required an 8A BMS HX-2S-D2.

```
         ┌────────────┐                  
┌────── B+            BM ─────────┐      
│        │ 8A BMS     │           │      
│        │   HX-2S-D2 P-          │      
│   ┌── B-            P+          │      
│   │    └────────────┘           │      
│   └───────────────────────────┐ │      
│  ┌─────────┐     ┌─────────┐  │ │      
│  │ BATTERY │     │ BATTERY │  │ │      
└─ + series1 - ─┬─ + series2 - ─┘ │      
   │  3.6 V  │  │  │  3.6 V  │    │      
   └─────────┘  │  └─────────┘    │      
                └─────────────────┘      
REWIRING BATTERIES (2S)                  
+ CONNECTING TO BMS                      
```

PROPORTIONS OF DIAGRAMS DO NOT COINCIDE 
WITH PHYSICAL COMPONENTS. Items are reduced or enlarged in favor 
of aesthetical representation.

                                                              
1. Connect the negative terminal of one battery to the positive terminal of the next. 

2. Continue to connect them until all the batteries are connected in a line (The series). 

3. Now, wire the positive terminal of the first battery in the series to the positive terminal on your protection board. 

4. Connect the negative terminal of the last battery in the series to the negative terminal on your protection board. 

5. Lastly solder the connection between first and second series to BM terminal on the protective board. 



Making the device capable of recharging demands a component with high voltage intake. Common power supplies use an output of 5V. The MT3608 converter module <a href="#bibliography">[12]</a> boosts this 5V to 9V/12V. Don’t forget to adjust the trimmer with a tiny screwdriver until the voltage is set to the desired output. (In this instance 7.2V.)



A 7.2 voltage output is too large for the single board microprocessor operating the electronic computing tool. It becomes essential to reduce the electronic discharge. Avoiding potential shortening. The S8V9F5 <a href="#bibliography">[13]</a> converts the battery voltage to a stable 5V for the Raspberry Pi 3B.

```
 ┌──────────────┐      /                 
 │              │     /                  
 │ RASPBERRY PI │   ┌───┐                
 │ 3B+          │   │   │    <-SWITCH    
 │              │   ├─┬─┤     (optional) 
 └───────GND─5V─┘                        
          └────────┐        
┌───────────┐      │        ┌──────────┐ 
│        VOUT      │┌───── -OUT        ┬┬
│ S8V9F5  GND ────┐││       │  MT3608  ││
│ 5V      VIN     │││      +OUT        ┴┴
│          EN     └│┘       └──────────┘               
└───────────┘    ┌─P-P+──BM─┐            
                 │          │            
WIRE CONNECTING  │          │            
GROUND(NEGATIVE) │  8A BMS  │            
                 | HX-2S-D2 |            
                 |          |            
```
                                         
1. Connect all cables to the negative terminal (P-) of the battery protection board.
 
2. Contact from Raspberry Pi 3B+ to GND pin is accomplished by soldering a female pin connector to the end of your wire in combination with a one pin connector. The allocation of the GPIO pin function depends on the specific device. (Look up micro processors data-sheet <a href="#bibliography">[14]</a>)


Including a switch is optional. However it is an important component to reduce the loss of electronic discharge. The user gains the option to use the tool portable or stationary. The latter implying the usage of an external corded power source. 


```
 ┌──────────────┐      /                 
 │              │     /                  
 │ RASPBERRY PI │   ┌───┐                
 │ 3B+          │   │   │    <-SWITCH    
 │              │   ├─┬─┤     (optional) 
 └───────GND─5V─┘                        
              │     │ │ │  
┌───────────┐ │     │ │ │   ┌──────────┐ 
│        VOUT ┘     │ │ │  -OUT        ┬┬ 
│ S8V9F5  GND       │ │ │   │  MT3608  ││
│ 5V      VIN ──────┘ │ └─ +OUT        ┴┴  
│          EN         │     └──────────┘             
└───────────┘    ┌─P-P+──BM─┐            
                 │          │            
WIRE CONNECTING  │          │            
ALL POSTIVES     │  8A BMS  │            
                 | HX-2S-D2 |            
                 |          |            
```                

1. Connect the P+ terminal of the BMS to the middle (OFF) switch contact point. 

2. Now, wire the positive terminal of the MT3608 to the switch's right (ON) contact point. 

3. Solder the VIN (Voltage In) of the S8V945 terminal to the last contact point of the switch (ON). The alignment of ON / OFF depends on the switch's positions before soldering. 

4. Lastly connect the VOUT (Voltage out) of the same component to the 5V GPIO pin on the Raspberry PI. Same additional Pi information as above. (WIRE CONNECTING GROUND) 



This tutorial is not an exclusive approach for producing a sustainable power source. Most components used are in support of the specific salvaged hardware. Consider this when approaching this tutorial for personal use. Modifying lithium ion batteries has significant safety concerns. RE-USE AT OWN RISK (more info: <a href="https://www.energy-batteries.com/lithium-ion-safety-concerns-understanding-the-risks-and-mitigation-strategies/" target="_blank">https://www.energy-batteries.com/lithium-ion-safety-concerns-understanding-the-risks-and-mitigation-strategies/</a>)







 
