import React, { Component, useState } from "react";
import {Button,Dialog,Heading, Box, ColorPalette, colors } from "@airtable/blocks/ui";
import MarkerForm from './markers/MarkerForm';

export default function MarkersApplication () {
    
      	const allowedColors = [
               		  colors.BLUE,
               		  colors.BLUE_BRIGHT,
               		  colors.BLUE_DARK_1,
               		  colors.BLUE_LIGHT_1,
               		  colors.BLUE_LIGHT_2,
               		  colors.RED,
               		  colors.GREEN,
               		];

         const [color, setColor] = useState(allowedColors[0]);
         const [isDialogOpen, setIsDialogOpen] = useState(false);

      const handleColorClick = () => {
               	
               	 setIsDialogOpen(true);

      }


	 const ColorPaletteExample = () => {
	
	  return (
	    <ColorPalette
	      color={color}
	      onChange={newColor => setColor(newColor)}
	      allowedColors={allowedColors}
	      width="150px"
	    />
	  );
	 };

      return (
      		<div> 
      		     <h2>Markers Application     </h2>

      		       <Box
				    border="thick"
				    backgroundColor="lightGray1"
				    borderRadius="large"
				    padding={2}
				    height={200}
				    overflow="hidden"
				  >
				  
				  
				    <hr/>
				  <Button 
				     onClick={() => handleColorClick()} icon="edit">
				     Add 
				  </Button>
				
				      {isDialogOpen && (
				        <Dialog onClose={() => setIsDialogOpen(false)} width="320px">
				          <Dialog.CloseButton />
				          <Heading>Dialog</Heading>
				         
				          <ColorPaletteExample />

				          <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
				        </Dialog>
				      )}


				 </Box>
				  <MarkerForm />
      		</div>

      	)

}


 