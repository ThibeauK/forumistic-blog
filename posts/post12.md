# Tutorial: salvaging external display and camera



<p><a href=#image-bibliography>[X] <img src="images/post12-1.jpg"></a></p>
Filled with passion to comprehend computational technology, I broke open my original HP notebook. [post4] Re-utilising its internal hardware to design new computational devices. Dead machines posses multiple re-usable components. Questioning computational necessity highlights internal hardware capable of emphasising technological awareness. This blog’s computational vessel should be able to display internal research and document self-existence. Requiring an external display and camera to execute specified functions. Both are effortlessly salvageable. 



1. Disconnect laptop from power source and remove internal battery. (Eliminating electrical hazards.)
2. Remove all screws from display frame. (There are multiple hidden underneath rubber pads, don’t forget to extract.)
3. Carefully dislodge plastic framework. 



**External display tutorial:**



Materials used: 
internal LCD panel



-    B101AW03 V1 (LCD controller board)



*This list does not include links to external stores. The consumer has a duty to be conscious when purchasing electronic supplies. 
Try and outsource from local repositories or obtain them from regional web-stores.*



1. Locate and remove screws anchoring display panel.
2. Disconnect LVDS cable (Sometimes necessary to open up entire machine to locate wire. Attached to specific internal hardware.)
3. Unplug inverter component located at bottom of screen. 



Salvaging hidden components is unattainable without systemised hardware, illustrating technologies attachment to commercial manufacturers. LCD driver boards are electronic circuits able to convert input signals. Also controlling the timing and voltage levels to ensure proper display operation. <a href=“#bilbliography”>[21]</a> Controller boards are display panel specific. Look up **LCD controller board + model number** (Found on explanatory label.) to purchase appropriate component. <a href=“#bilbliography”>[22]</a>

```
 ┌┬─────────────LVDS────┬┐           
 │└────────────┬INPUT┬──┘│           
 │└ ─ ─ ─ ─ ─ ─└┬┬┬┬┬┘─ ┘│           
 │              ││││└────┴────┐      
 │              │││└─────────┐│      
 │  BACK OF     ││└─────────┐││      
 │  LCD DISPLAY └┴───────┬─┐│││      
 │                       │ ││││      
 │                       │ ││││L     
 └───────────────────────┘ ││││V     
                           ││││D     
                ┌──────────┘│││S     
     ┌^─┐ ┌─────┼──────┐    │││      
     │ o│ │            │    │││      
     │  │ │         O──┼────┘││      
     │ o│ │         U──┼─────┘│      
     │  │ │         T──┼──────┘      
     │ o│ │ LCD        │             
   ┌─┼ o│ │ CONTROLLER │             
   │┌┼  │ │ BOARD      │             
   │││ o│ │            │             
   ││└──┘ └───────┼┼───┘             
   │└─────────────┘│                 
   └───────────────┘                 
CONNECTING DISPLAY                   
TO B101AW03 V1 (CB)               
```

PROPORTIONS OF DIAGRAMS DO NOT COINCIDE 
WITH PHYSICAL COMPONENTS. 
Items are reduced or enlarged in favor 
for aesthetical representation.


1. Plug LVDS cable into LCD display panel.






**Camera tutorial:**



Materials used: 



-    930100Y50-515-G (Internal camera module board)



-    2 x 1N4001 Diodes



-    re-appropriated USB wire 



The internal camera component is situated above display panel. This salvaging process will not utilise systemised hardware, simply re-purposing an unused USB cable.



1. Disconnect camera component from system.
2. Cut wire to approximately 6 cm.
3. Discover purpose of each wire. 



USB cables are internally separated into four electrical tubings: power positive, power negative (ground), data positive and data negative. Discovering corresponding cables on camera module component allows full functionality through USB protocol. The module board’s cables are seldom colour coordinated. A digital multimeter is required to discover independent wire functions. <a href=“#bilbliography”>[23]</a> 



-    Power ground is easily locatable. Take turns connecting a large copper trace to every wire. The multimeter will **beep** when you have established the correct cable. 



-    Discovering power positive is more challenging. Connect a small transistor-like component (power regulator) to alternating wires. Another **Beep** will highlight power positive. Some contact points are also attached to power negative, I advice you to test the connectors multiple times. 



-    The data connections are most undeniably the two entwined cables. 



The standard voltage for USB cables is 5V, most camera module boards run on 3.6V. Two 1N4001 diodes reduce the cable’s electronic discharge from 5V to 3.6V. Neglecting these components could destroy the camera module board. 

```
      USB                            
     ┌───┐                           
    +5V  ┼──DIODE1─►───DIODE2─►─────┐
  +DATA  ┼─────────────────────────┐│
  -DATA  ┼─────────────────────────┤│
   -GND  ┼────────────────────────┐x│
     └───┘                        │x│
                      EXTRA WIRE─┐│x│
  ─ ─────────────────┐           ││x│
                   ? ┼───────────┘│x│
   CAMERA       -GND ┼────────────┘x│
   MODULE      DATA- ┼──────┬─x─x─x┘│
   BOARD       DATA+ ┼──────┘       │
               +3.6V ┼──────────────┘
   ─ ─ ──────────────┘               
 SOLDERING USB                       
 TO 930100Y50-515-G (CMB)                        
```

            
<a href=#bibliography>[24]</a> 



1. Solder module board’s ground cable to USB power negative wire. 
2. Connect power positive to USB equivalent. Locate two 1N4001 Diodes in between both cables. (Stripe facing camera module board.)
3. Attach both data wires to corresponding USB tubing. (Polarity of wire can only be discover after connecting camera to computational system. Unlikely to cause actual harm.)
4. Wrap all visible contact points in insulation tape. (Cover up all external wires to avoid shortage.)



<p><a href=#image-bibliography>[XI] <img src="images/post12-2.jpg"></a></p> 

**Forumistic.blog** utilises a salvaged camera module to capture digital pictures. Reappropriated hardware removes computational dependence on screen capturing software. Low quality images shape pixelated silhouettes, accompanied by descriptive language. Allowing the user to visualise theoretical inquiries detached from high data transfer. Original image links are accessible in <a href=#image-bibliography>#image-bibliography</a>.
 
