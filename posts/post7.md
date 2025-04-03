# Tutorial: reusing lithium ion batteries



Current electronic devices primarily make use of lithium-ion batteries as an energy source. These components have serious environmental hazards and threaten the sustainability of human life. Their extensive usage leads to an enormous amounts being discarded in landmines. A batteries life span depends from the magnitude of the device. Nonetheless most of them are still viable for reuse. 



During the creation of my electronic computing tool it become apparent that there was a personal necessity to make it a portable rechargeable device. Recognising the harmful nature of lithium ion batteries I gravitated towards an unused 20000 mAh powerbank. Previously perceived as a defective gadget. Its internal parts made up of 8 18650 3.6V 9.0Wh lithium-ion batteries and a control circuit which regulates the flow op electricity. After breaching the outer shell it became apparent that its internal circuitry was faulty. Outputting only 3.6V instead of the 5V current small devices consume. The creation of a sustainable internal battery would be feasible through the modification of its electronic discharge.



Components used: 

-    8 lithium io batteries 

-    8A BMS HX-2S-D2 (Battery protection board) 

-    MT3608 (Boost converter module) 

-    5V S8V9F5 (Step-up/step-down voltage regulator) 

-    Switch (optional)



*This list does not include link to external stores. The consumer has a duty to be conscious when purchasing electronic supplies. The cheapest options are likely the most harmful. Try and outsource from local repositories or obtain them from regional web-stores.* 



The first task is to re-solder the batteries. Currently all 8 are wired parallel, outputting a voltage of 3.6V. To gain a higher discharge we need to reposition them in a series of 2. Duplicating the amount of voltage. (The capacity of the batteries remains unchanged.) 



Lithium ion batteries are prone to hazardous conditions like overcharging, deep discharge and overheating. Therefor a battery protection board is an essential component to safeguard the battery cells and ensure proper charging. Specific electronic conditions require specific boards. This project required an 8A BMS HX-2S-D2.

&#x20;&boxdr;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxdl;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&sol;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&NewLine;&#x20;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&sol;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&NewLine;&#x20;&boxv;&#x20;&#x52;&#x41;&#x53;&#x50;&#x42;&#x45;&#x52;&#x52;&#x59;&#x20;&#x50;&#x49;&#x20;&boxv;&#x20;&#x20;&#x20;&boxdr;&boxh;&boxh;&boxh;&boxdl;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&NewLine;&#x20;&boxv;&#x20;&#x33;&#x42;&plus;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&boxv;&#x20;&#x20;&#x20;&boxv;&#x20;&#x20;&#x20;&boxv;&#x20;&#x20;&#x20;&#x20;&lt;&#x2d;&#x53;&#x57;&#x49;&#x54;&#x43;&#x48;&#x20;&#x20;&#x20;&#x20;&NewLine;&#x20;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&boxv;&#x20;&#x20;&#x20;&boxvr;&boxh;&boxhd;&boxh;&boxvl;&#x20;&#x20;&#x20;&#x20;&#x20;&lpar;&#x6f;&#x70;&#x74;&#x69;&#x6f;&#x6e;&#x61;&#x6c;&rpar;&#x20;&NewLine;&#x20;&boxur;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&#x47;&#x4e;&#x44;&boxh;&#x35;&#x56;&boxh;&boxul;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&NewLine;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&boxv;&#x20;&boxv;&#x20;&boxv;&#x20;&#x20;&#x20;&boxdr;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxdl;&#x20;&NewLine;&boxdr;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxdl;&#x20;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&boxv;&#x20;&boxv;&#x20;&boxv;&#x20;&#x20;&#x2d;&#x4f;&#x55;&#x54;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&boxhd;&boxhd;&NewLine;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x56;&#x4f;&#x55;&#x54;&#x20;&boxul;&#x20;&#x20;&#x20;&#x20;&#x20;&boxv;&#x20;&boxv;&#x20;&boxv;&#x20;&#x20;&#x20;&boxv;&#x20;&#x20;&#x4d;&#x54;&#x33;&#x36;&#x30;&#x38;&#x20;&#x20;&boxv;&boxv;&NewLine;&boxv;&#x20;&#x53;&#x38;&#x56;&#x39;&#x46;&#x35;&#x20;&#x20;&#x47;&#x4e;&#x44;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&boxv;&#x20;&boxv;&#x20;&boxur;&boxh;&#x20;&plus;&#x4f;&#x55;&#x54;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&boxhu;&boxhu;&NewLine;&boxv;&#x20;&#x35;&#x56;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x56;&#x49;&#x4e;&#x20;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxul;&#x20;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&boxur;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxul;&#x20;&NewLine;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x45;&#x4e;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&NewLine;&boxur;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxul;&#x20;&#x20;&#x20;&#x20;&boxdr;&boxh;&#x50;&#x2d;&#x50;&plus;&boxh;&boxh;&#x42;&#x4d;&boxh;&boxdl;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&NewLine;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&NewLine;&#x57;&#x49;&#x52;&#x45;&#x20;&#x43;&#x4f;&#x4e;&#x4e;&#x45;&#x43;&#x54;&#x49;&#x4e;&#x47;&#x20;&#x20;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&NewLine;&#x41;&#x4c;&#x4c;&#x20;&#x50;&#x4f;&#x53;&#x54;&#x49;&#x56;&#x45;&#x53;&#x20;&#x20;&#x20;&#x20;&#x20;&boxv;&#x20;&#x20;&#x38;&#x41;&#x20;&#x42;&#x4d;&#x53;&#x20;&#x20;&boxv;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&NewLine;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&verbar;&#x20;&#x48;&#x58;&#x2d;&#x32;&#x53;&#x2d;&#x44;&#x32;&#x20;&verbar;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&NewLine;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&verbar;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&verbar;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;

REWIRING BATTERIES (2S)                  
+ CONNECTING TO BMS

PROPORTIONS OF DIAGRAMS DO NOT COINCIDE 
WITH PHYSICAL COMPONENTS. 
Items are reduced or enlarged in favor 
for aesthetical representation.

                                                              
1 Connect the negative terminal of one battery to the positive terminal of the next. 

2 Continue to connect them until all the batteries are connected in a line (The series). 

3 Now, wire the positive terminal of the first battery in the series to the positive terminal on your protection board. 

4 Connect the negative terminal of the last battery in the series to the negative terminal on your protection board. 

5 Lastly solder the connection between first and second series to BM terminal on the protective board. 



Making the device capable of recharging demands a component with a high voltage intake. Common power supplies use an output of 5V. The MT3608 converter module boosts the 5V to 9V/12V for charging. Don’t forget to adjust the trimmer with a tiny screwdriver until the voltage is set to the desired output. (In this instance 7.2V.)



A 7.2 voltage output is too large for the single board microprocessor operating the electronic computing tool. It becomes essential to reduce the electronic discharge. Avoiding a potential shortening, the S8V9F5 converts the battery voltage to a stable 5V for the Raspberry Pi 3B.


 ┌──────────────┐      /                 
 │              │     /                  
 │ RASPBERRY PI │   ┌───┐                
 │ 3B+          │   │   │    <-SWITCH    
 │              │   ├─┬─┤     (optional) 
 └───────GND─5V─┘                        
          └────────┐        ┌──────────┐ 
┌───────────┐      │┌───── -OUT        ┬┬
│        VOUT      ││       │  MT3608  ││
│ S8V9F5  GND ────┐││      +OUT        ┴┴
│ 5V      VIN     │││       └──────────┘ 
│          EN     └│┘                    
└───────────┘    ┌─P-P+──BM─┐            
                 │          │            
WIRE CONNECTING  │          │            
GROUND(NEGATIVE) │  8A BMS  │            
                 | HX-2S-D2 |            
                 |          |            

                                         
1 Connect all cables to the negative terminal (P-) of the battery protection board.
 
1/2 Contact from Raspberry Pi 3B+ to GND pin is accomplished by soldering a female pin connecter to the end of your wire in combination with a one pin connecter. The allocation of the GPIO pin function depends to the specific device. (Look up micro processors data-sheet)


Including a switch is optional. However it is an important component to reduce the loss of electronic discharge. The user gains the option to use the tool portable or stationary. The latter implying the usage of an external corded power source. 



 ┌──────────────┐          /                
 │              │         /                 
 │ RASPBERRY PI │       ┌───┐               
 │ 3B+          │       │   │<-SWITCH       
 │              │       ├─┬─┤ (optional)    
 └───────GND─5V─┘                           
              │         │ │ │               
┌───────────┐ │         │ │ │               
│        VOUT ┘         │ │ │  ┌──────────┐ 
│ S8V9F5  GND           │ │ │ -OUT        ┬┬
│ 5V      VIN ──────────┘ │ │  │  MT3608  ││
│          EN             │ └ +OUT        ┴┴
└───────────┘    ┌─BM──P-P+─┐  └──────────┘ 
                 │          │               
WIRE CONNECTING  │          │               
ALL POSTIVES     │  8A BMS  │               
                 | HX-2S-D2 |               
                 |          |           
                 

1 Connect the P+ terminal of the BMS to the middle (OFF) switch contact point. 

2 Now, wire the positive terminal of the MT3608 to the switches right (ON) contact point. 

3 Solder the VIN (Voltage In) of the S8V945 terminal to the last contact point of the switch (ON). The alignment of ON / OFF depends on the switches positions before soldering. 

4 Lastly connect the VOUT (Voltage out) of the same component to the 5V GPIO pin on the Raspberry PI. Same additional Pi information as above. (WIRE CONNECTING GROUND) 



This tutorial is not an exclusive approach for producing a sustainable internal battery. Most components  used are in support of the specific hardware found in my discarded powerbank. Consider this when approaching my project for personal use. Modifying lithium ion batteries have significant safety concerns. RE-USE AT OWN RISK (more info: https://www.energy-batteries.com/lithium-ion-safety-concerns-understanding-the-risks-and-mitigation-strategies/)



Sources: 
https://www.sciencedirect.com/science/article/pii/S2950357424000271 

https://lithiumhub.com/series-vs-parallel/ 

https://www.ufinebattery.com/blog/learn-about-lithium-battery-protection-circuit/ 

https://www.instructables.com/DC-DC-Boost-Converter-MT3608/ 

https://www.pololu.com/product/2123 

https://raspberrytips.com/raspberry-pi-gpio-pins/#required-hardware 



 
