/* Demo data (replace with your backend later) */
const PRODUCTS = [
  <!--{id:'g1', title:'Sleeping Ganesh', category:'Ganesh', size:'1ft', material:'Black Stone', price:12000, img:['src/assets/ganesh_sleeping.png','src/assets/ganesh_sleeping.png','src/assets/ganesh_sleeping.png','src/assets/ganesh_sleeping.png'], desc:'Hand‑carved 1 ft Ganesh in reclining pose.'},-->
  <!--{id:'g2', title:'Sitting Ganesh', category:'Ganesh', size:'2ft', material:'Marble', price:45000, img:['src/assets/ganesh_sitting.jpg','src/assets/ganesh_sitting.jpg','src/assets/ganesh_sitting.jpg','src/assets/ganesh_sitting.jpg'], desc:'2 ft seated Ganesh with ornate detailing.'},-->
  <!--{id:'g3', title:'Standing Ganesh', category:'Ganesh', size:'3ft', material:'Sandstone', price:78000, img:['src/assets/ganesh_standing.png','src/assets/ganesh_standing.png','src/assets/ganesh_standing.png','src/assets/ganesh_standing.png'], desc:'3 ft standing Ganesh ideal for courtyards.'},-->
  {id:'b1', title:'Meditating Buddha', category:'Buddha', size:'2ft', material:'Granite', price:45000, img:['src/assets/photo/budha/buddha_meditating/buddha_meditating_1.jpg','src/assets/photo/budha/buddha_meditating/buddha_meditating_2.jpg','src/assets/photo/budha/buddha_meditating/buddha_meditating_3.jpg','src/assets/photo/budha/buddha_meditating/buddha_meditating_4.jpg'], desc:'Made from black granite with grey finishing, height 24 inches, width 17 inches, and thickness 10 inches.'},
  {id:'b2', title:'Meditating Buddha', category:'Buddha', size:'1ft', material:'White Marble', price:47550, img:['src/assets/photo/budha/white_marble/budha_white_marble_1.jpg','src/assets/photo/budha/white_marble/budha_white_marble_2.jpg','src/assets/photo/budha/white_marble/budha_white_marble_3.jpg','src/assets/photo/budha/white_marble/budha_white_marble_4.jpg'], desc:'Made from white natural marble, height 18 inches, width 13 inches, and thickness 6 inches.'},
  
  <!--lord vishnu-->
  {id:'v1', title:'Vishnu on Garuda', category:'Vishnu', size:'3ft', material:'Granite', price:350000, img:['src/assets/photo/vishnu/sleeping/vishnu_sleeping_1.jpg','src/assets/photo/vishnu/sleeping/vishnu_sleeping_2.jpg','src/assets/photo/vishnu/sleeping/vishnu_sleeping_3.jpg','src/assets/photo/vishnu/sleeping/vishnu_sleeping_4.jpg'], desc:'Vishnu with Garuda in black granite stone, height 36 inches, width 60 inches, and thickness 18 inches.'},
  <!--Small Ananta Vishnu-->
  {id:'v2', title:'Small Ananta Vishnu', category:'Vishnu', size:'2ft', material:'Black Granite', price:55000, img:['src/assets/photo/vishnu/sitting/small_ananta_vishnu/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/small_ananta_vishnu/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/small_ananta_vishnu/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/small_ananta_vishnu/vishnu_sitting_4.jpg'], desc:'Ananta Vishnu in black granite stone, height 24 inches, width 14 inches, and thickness 8 inches.'},
  <!--Vishnu in grey finishing-->
  {id:'v3', title:'Vishnu in grey finishing', category:'Vishnu', size:'3ft', material:'Grey Granite', price:135000, img:['src/assets/photo/vishnu/sitting/vishnu_grey/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/vishnu_grey/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/vishnu_grey/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/vishnu_grey/vishnu_sitting_4.jpg'], desc:'Vishnu in grey granite stone, height 38 inches, width 21 inches, and thickness 15 inches.'},
  <!--Vishnu black granite-->
  {id:'v4', title:'Vishnu in Black Granite', category:'Vishnu', size:'5ft', material:'Black Granite', price:325000, img:['src/assets/photo/vishnu/sitting/vishnu_black_granite/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/vishnu_black_granite/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/vishnu_black_granite/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/vishnu_black_granite/vishnu_sitting_4.jpg'], desc:'Vishnu in black granite stone, height 65 inches, width 33 inches, and thickness 20 inches.'},
  
  <!--Chaturmukhi Vishnu Head-->
  {id:'v5', title:'Vishnu in Black Granite', category:'Vishnu', size:'3ft', material:'Black Granite', price:195000, img:['src/assets/photo/vishnu/sitting/chaturmukhi_vishnu_head/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/chaturmukhi_vishnu_head/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/chaturmukhi_vishnu_head/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/chaturmukhi_vishnu_head/vishnu_sitting_4.jpg'], desc:'Chaturmukhi Vishnu Head in black granite stone, height 42 inches, width 26 inches, and thickness 18 inches.'}, 

 <!--Standing Lalita Vishnu-->
  {id:'v6', title:'Vishnu in Black Granite', category:'Vishnu', size:'2ft', material:'Black Granite', price:42500, img:['src/assets/photo/vishnu/sitting/standing_lalita_vishnu/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/standing_lalita_vishnu/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/standing_lalita_vishnu/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/standing_lalita_vishnu/vishnu_sitting_4.jpg'], desc:'Standing Lalita Vishnu in black granite stone, height 24 inches, width 15 inches, and thickness 7 inches.'}, 

   <!--Designer Tribhanga Krishna-->
  {id:'v7', title:'Vishnu in Black Granite', category:'Vishnu', size:'1ft', material:'Black Granite', price:24500, img:['src/assets/photo/vishnu/sitting/designer_tribhanga_krishna/vishnu_sitting_1.JPG','src/assets/photo/vishnu/sitting/designer_tribhanga_krishna/vishnu_sitting_2.JPG','src/assets/photo/vishnu/sitting/designer_tribhanga_krishna/vishnu_sitting_3.JPG','src/assets/photo/vishnu/sitting/designer_tribhanga_krishna/vishnu_sitting_4.JPG'], desc:'Designer Tribhanga Krishna in black granite stone, height 16 inches, width 7 inches, and thickness 5 inches.'}, 
   <!--Tribhanga Krishna-->
  {id:'v8', title:'Vishnu in Blue Granite', category:'Vishnu', size:'1ft', material:'Blue Granite', price:28500, img:['src/assets/photo/vishnu/sitting/tribhanga_krishna/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/tribhanga_krishna/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/tribhanga_krishna/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/tribhanga_krishna/vishnu_sitting_4.jpg'], desc:'Tribhanga Krishna in blue granite stone, height 18 inches, width 7 inches, and thickness 5 inches.'}, 

   <!--Surya Narayan-->
  {id:'v9', title:'Vishnu in Black Granite', category:'Vishnu', size:'3ft', material:'Black Granite', price:175000, img:['src/assets/photo/vishnu/sitting/surya_narayan/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/surya_narayan/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/surya_narayan/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/surya_narayan/vishnu_sitting_4.jpg'], desc:'Surya Narayan in black granite stone, height 38 inches, width 20 inches, and thickness 10 inches.'},   
  
   <!--Hoyashala-->
  {id:'v10', title:'Vishnu in Grey Granite', category:'Vishnu', size:'6ft', material:'Grey Granite', price:375000, img:['src/assets/photo/vishnu/sitting/hoyashala/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/hoyashala/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/hoyashala/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/hoyashala/vishnu_sitting_4.jpg'], desc:'Standing Vishnu Statue in Hoyashala pattern in grey granite stone, height 72 inches, width 36 inches, and thickness 18 inches.'},
  
    <!--Standing Vishnu in 6 feet in White Marble-->
  {id:'v11', title:'Vishnu in White Marble', category:'Vishnu', size:'6ft', material:'White Marble', price:375000, img:['src/assets/photo/vishnu/sitting/6_feet_white_marble/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/6_feet_white_marble/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/6_feet_white_marble/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/6_feet_white_marble/vishnu_sitting_4.jpg'], desc:'Standing Vishnu in White Marble, height 72 inches, width 30 inches, and thickness 18 inches.'},  

    <!--Standing Garuda in 15 feet in Black Granite-->
  {id:'v12', title:'Garuda in Black Granite', category:'Vishnu', size:'15ft', material:'Black Marble', price:2500000, img:['src/assets/photo/vishnu/sitting/standing_garuda/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/standing_garuda/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/standing_garuda/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/standing_garuda/vishnu_sitting_4.jpg'], desc:'Standing Garuda in Black Granite, height 195 inches, width 60 inches, and thickness 36 inches.'},
    
	<!--Cow Krishna in Pink Stone-->
  {id:'v13', title:'Cow Krishna in Pink Stone', category:'Vishnu', size:'3ft', material:'Pink Stone', price:48500, img:['src/assets/photo/vishnu/sitting/cow_krishna/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/cow_krishna/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/cow_krishna/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/cow_krishna/vishnu_sitting_4.jpg'], desc:'Cow Krishna in Pink Stone, height 36 inches, width 20 inches, and thickness 10 inches.'},
  
	<!--Ram darbar statue in 5 feet-->
  {id:'v14', title:'Ram Darbar in Black Granite', category:'Vishnu', size:'5ft', material:'Black Stone', price:225000, img:['src/assets/photo/vishnu/sitting/ram_darbar_statue/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/ram_darbar_statue/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/ram_darbar_statue/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/ram_darbar_statue/vishnu_sitting_4.jpg'], desc:'Ram darbar in Black Stone, height 63 inches, width 39 inches, and thickness 15 inches.'},   

	<!--Radha Krishna in Pink Stone -->
  {id:'v15', title:'Radha Krishna in Pink Stone', category:'Vishnu', size:'3ft', material:'Sand Stone', price:65000, img:['src/assets/photo/vishnu/sitting/radha_krishna_in_pink_stone/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/radha_krishna_in_pink_stone/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/radha_krishna_in_pink_stone/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/radha_krishna_in_pink_stone/vishnu_sitting_4.jpg'], desc:'Radha Krishna in Pink Stone, height 36 inches, width 20 inches, and thickness 10 inches.'}, 
  
	<!--Parshuram statue  in 24 inch height -->
  {id:'v16', title:'Parshuram statue in Black Granite', category:'Vishnu', size:'2ft', material:'Black Granite', price:42500, img:['src/assets/photo/vishnu/sitting/parshuram_statue/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/parshuram_statue/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/parshuram_statue/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/parshuram_statue/vishnu_sitting_4.jpg'], desc:'Parshuram statue in Black Granite, height 24 inches, width 17 inches, and thickness 7 inches.'}, 

	<!--Nrusingha statue in 15 inch height -->
  {id:'v17', title:'Nrusingha statue in Black Granite', category:'Vishnu', size:'1ft', material:'Black Granite', price:25500, img:['src/assets/photo/vishnu/sitting/nrusingha_statue/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/nrusingha_statue/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/nrusingha_statue/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/nrusingha_statue/vishnu_sitting_4.jpg'], desc:'Nrusingha statue in Black Granite, height 15 inches, width 8 inches, and thickness 5 inches.'}, 

	<!--Standing narayan statue in 3 feet -->
  {id:'v18', title:'Standing Narayan statue in Black Granite', category:'Vishnu', size:'3ft', material:'Black Granite', price:65500, img:['src/assets/photo/vishnu/sitting/standing_narayana/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/standing_narayana/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/standing_narayana/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/standing_narayana/vishnu_sitting_4.jpg'], desc:'Nrusingha statue in Black Granite, height 36 inches, width 17 inches, and thickness 9 inches.'}, 

	<!--Mastya Avatara in 24 inch -->
  {id:'v19', title:'Mastya Avatara statue in Blue Granite', category:'Vishnu', size:'2ft', material:'Blue Granite', price:52500, img:['src/assets/photo/vishnu/sitting/2_feets_mastya_avatara/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/2_feets_mastya_avatara/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/2_feets_mastya_avatara/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/2_feets_mastya_avatara/vishnu_sitting_3.jpg'], desc:'Mastya Avatara statue in Blue Granite, height 24 inches, width 15 inches, and thickness 7 inches.'}, 

	<!--Mastya avatastatue in 15 inch -->
  {id:'v20', title:'Mastya Avatara statue in Blue Granite', category:'Vishnu', size:'1ft', material:'Blue Granite', price:28500, img:['src/assets/photo/vishnu/sitting/1_feets_mastya_avatara/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/1_feets_mastya_avatara/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/1_feets_mastya_avatara/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/1_feets_mastya_avatara/vishnu_sitting_4.jpg'], desc:'Mastya Avatara statue in Blue Granite, height 15 inches, width 8 inches, and thickness 5 inches.'}, 
 
	<!--Marble Cow Krishna With 18 inch Height -->
  {id:'v21', title:'Marble Cow Krishna statue in White Marble', category:'Vishnu', size:'1ft', material:'White Marble', price:49500, img:['src/assets/photo/vishnu/sitting/cow_krishna_marble/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/cow_krishna_marble/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/cow_krishna_marble/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/cow_krishna_marble/vishnu_sitting_4.jpg'], desc:'Marble Cow Krishna statue in White Marble, height 18 inches, width 10 inches, and thickness 6 inches.'},  
 
	<!--Kurma Avatra in 15 Inch -->
  {id:'v22', title:'Kurma Avatra statue in Blue Marble', category:'Vishnu', size:'1ft', material:'Blue Granite', price:28500, img:['src/assets/photo/vishnu/sitting/kurma_avatra/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/kurma_avatra/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/kurma_avatra/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/kurma_avatra/vishnu_sitting_4.jpg'], desc:'Kurma Avatra statue in Blue Marble, height 15 inches, width 8 inches, and thickness 5 inches.'},

	<!--Tribhanga Krishna in 24 inch -->
  {id:'v23', title:'Tribhanga Krishna statue in Black Marble', category:'Vishnu', size:'2ft', material:'Black Granite', price:48500, img:['src/assets/photo/vishnu/sitting/tribhanga_krishna_24_inches/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/tribhanga_krishna_24_inches/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/tribhanga_krishna_24_inches/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/tribhanga_krishna_24_inches/vishnu_sitting_4.jpg'], desc:'Tribhanga Krishna statue in Black Marble, height 24 inches, width 12 inches, and thickness 6 inches.'},

	<!--Blue Granite Kalki statue -->
  {id:'v24', title:'Kalki statue in Blue Granite', category:'Vishnu', size:'1ft', material:'Blue Granite', price:35500, img:['src/assets/photo/vishnu/sitting/blue_granite_kalki/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/blue_granite_kalki/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/blue_granite_kalki/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/blue_granite_kalki/vishnu_sitting_4.jpg'], desc:'Kalki statue in Black Marble, height 18 inches, width 10 inches, and thickness 6 inches.'},
  
	<!--18 inch sitting Garuda Deb -->
  {id:'v25', title:'Garuda statue in Grey Granite', category:'Vishnu', size:'1ft', material:'Grey Granite', price:32500, img:['src/assets/photo/vishnu/sitting/garuda_deb/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/garuda_deb/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/garuda_deb/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/garuda_deb/vishnu_sitting_4.jpg'], desc:'Grey Granite statue in Black Marble, height 18 inches, width 10 inches, and thickness 6 inches.'},

	<!--5 feet sitting Garuda stature -->
  {id:'v26', title:'Garuda statue in Black Granite', category:'Vishnu', size:'5ft', material:'Black Granite', price:275000, img:['src/assets/photo/vishnu/sitting/garuda_deb_5_feets/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/garuda_deb_5_feets/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/garuda_deb_5_feets/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/garuda_deb_5_feets/vishnu_sitting_4.jpg'], desc:'Garuda statue in Black Granite, height 60 inches, width 30 inches, and thickness 18 inches.'},   

	<!--Marble vishnu with 27 inch -->
  {id:'v27', title:'Vishnu statue in White Marble', category:'Vishnu', size:'2ft', material:'White Marble', price:49500, img:['src/assets/photo/vishnu/sitting/marble_vishnu_27_inches/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/marble_vishnu_27_inches/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/marble_vishnu_27_inches/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/marble_vishnu_27_inches/vishnu_sitting_4.jpg'], desc:'Garuda statue in White Marble, height 27 inches, width 10 inches, and thickness 9 inches.'},
  
  	<!--Baman Dev with 27 inch -->
  {id:'v28', title:'Baman Dev statue in Blue Granite', category:'Vishnu', size:'1ft', material:'Blue Granite', price:32500, img:['src/assets/photo/vishnu/sitting/baman_dev/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/baman_dev/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/baman_dev/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/baman_dev/vishnu_sitting_4.jpg'], desc:'Baman Dev statue in Blue Granite, height 15 inches, width 9 inches, and thickness 6 inches.'},
  
  	<!--21 inch Naked Bal Krishna Idol -->
  {id:'v29', title:'Naked Bal Krishna Idol in Black Granite', category:'Vishnu', size:'1ft', material:'Black Granite', price:45500, img:['src/assets/photo/vishnu/sitting/naked_bal_krishna/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/naked_bal_krishna/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/naked_bal_krishna/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/naked_bal_krishna/vishnu_sitting_4.jpg'], desc:'Naked Bal Krishna Idol in Black Granite, height 21 inches, width 10 inches, and thickness 8 inches.'},

  	<!--20 inch Sitting Vishnu on Ananta -->
  {id:'v30', title:'Sitting Vishnu on Ananta in Black Granite', category:'Vishnu', size:'1ft', material:'Black Granite', price:38500, img:['src/assets/photo/vishnu/sitting/sitting_vishnu_on_ananta/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/sitting_vishnu_on_ananta/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/sitting_vishnu_on_ananta/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/sitting_vishnu_on_ananta/vishnu_sitting_4.jpg'], desc:'Sitting Vishnu on Ananta in Black Granite, height 20 inches, width 10 inches, and thickness 5 inches.'}, 

  	<!--4 feet Sitting Vishnu on Ananta nag -->
  {id:'v31', title:'Sitting Vishnu on Ananta in Grey Granite', category:'Vishnu', size:'1ft', material:'Grey Granite', price:175000, img:['src/assets/photo/vishnu/sitting/sitting_vishnu_on_ananta_4_feets/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/sitting_vishnu_on_ananta_4_feets/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/sitting_vishnu_on_ananta_4_feets/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/sitting_vishnu_on_ananta_4_feets/vishnu_sitting_4.jpg'], desc:'Sitting Vishnu on Ananta in Grey Granite, height 48 inches, width 27 inches, and thickness 15 inches.'},  

  	<!--3 feet Hoyashala pattern Vishnu -->
  {id:'v32', title:'Hoyashala pattern Vishnu in Grey Granite', category:'Vishnu', size:'3ft', material:'Grey Granite', price:95000, img:['src/assets/photo/vishnu/sitting/hoyashala_pattern/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/hoyashala_pattern/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/hoyashala_pattern/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/hoyashala_pattern/vishnu_sitting_4.jpg'], desc:'Hoyashala pattern Vishnu in Grey Granite, height 36 inches, width 21 inches, and thickness 12 inches.'}, 

  	<!--12 inch Balaji statue -->
  {id:'v33', title:'Balaji statue in Black Granite', category:'Vishnu', size:'1ft', material:'Grey Granite', price:15500, img:['src/assets/photo/vishnu/sitting/balaji_statue_12_inches/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/balaji_statue_12_inches/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/balaji_statue_12_inches/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/balaji_statue_12_inches/vishnu_sitting_4.jpg'], desc:'Balaji statue in Black Granite, height 12 inches, width 6 inches, and thickness 5 inches.'},
  
  <!--22 inch Balaji statue -->
  {id:'v34', title:'Balaji statue in Grey Granite', category:'Vishnu', size:'1ft', material:'Grey Granite', price:48500, img:['src/assets/photo/vishnu/sitting/balaji_statue_22_inches/vishnu_sitting_1.jpg','src/assets/photo/vishnu/sitting/balaji_statue_22_inches/vishnu_sitting_2.jpg','src/assets/photo/vishnu/sitting/balaji_statue_22_inches/vishnu_sitting_3.jpg','src/assets/photo/vishnu/sitting/balaji_statue_22_inches/vishnu_sitting_4.jpg'], desc:'Balaji statue in Black Granite, height 22 inches, width 15 inches, and thickness 6 inches.'},

<!--Lord Siva  -->
  {id:'s1', title:'Shiva Lingam Set', category:'Shiva', size:'2ft', material:'Sand Stone', price:33500, img:['src/assets/photo/shiva/sitting/24_inches/siva_sitting_1.jpg','src/assets/photo/shiva/sitting/24_inches/siva_sitting_2.jpg','src/assets/photo/shiva/sitting/24_inches/siva_sitting_3.jpg','src/assets/photo/shiva/sitting/24_inches/siva_sitting_4.jpg'], desc:'Sitting Shiva statue in sand stone, height 24 inches, width 15 inches, and thickness 7 inches.'},
<!--Kalbhairav-->
   {id:'k1', title:'Black Granite Kalbhairav', category:'Shiva', size:'4ft', material:'Black Granite Stone', price:175000, img:['src/assets/photo/kalbhairav/sitting/4_feets/kalbhairav_sitting_1.jpg','src/assets/photo/kalbhairav/sitting/4_feets/kalbhairav_sitting_2.jpg','src/assets/photo/kalbhairav/sitting/4_feets/kalbhairav_sitting_3.jpg','src/assets/photo/kalbhairav/sitting/4_feets/kalbhairav_sitting_4.jpg'], desc:'Kalbhairav sculpture in black granite stone, height 60 inches, width 33 inches, and thickness 20 inches.'}, 
   
  {id:'s2', title:'4 head Shiva bust statue', category:'Shiva', size:'3ft', material:'White Marble', price:225000, img:['src/assets/photo/shiva/sitting/4_heads/siva_sitting_1.jpg','src/assets/photo/shiva/sitting/4_heads/siva_sitting_2.jpg','src/assets/photo/shiva/sitting/4_heads/siva_sitting_3.jpg','src/assets/photo/shiva/sitting/4_heads/siva_sitting_4.jpg'], desc:'Four head Shiva bust statue in White Marble, height 42 inches, width 28 inches, and thickness 21 inches.'},
  
{id:'s3', title:'Sitting Dhyan Mudra Shiva', category:'Shiva', size:'2ft', material:'Grey Granite', price:45000, img:['src/assets/photo/shiva/sitting/24_inches_1/siva_sitting_1.jpg','src/assets/photo/shiva/sitting/24_inches_1/siva_sitting_2.jpg','src/assets/photo/shiva/sitting/24_inches_1/siva_sitting_3.jpg','src/assets/photo/shiva/sitting/24_inches_1/siva_sitting_4.jpg'], desc:'Sitting Shiva statue in Grey Granite, height 24 inches, width 15 inches, and thickness 8 inches.'},

{id:'s4', title:'Nataraj Statue in White Stone', category:'Shiva', size:'2ft', material:'White Stone', price:125000, img:['src/assets/photo/shiva/sitting/nataraj_white_stone/siva_sitting_1.jpg','src/assets/photo/shiva/sitting/nataraj_white_stone/siva_sitting_2.jpg','src/assets/photo/shiva/sitting/nataraj_white_stone/siva_sitting_3.jpg','src/assets/photo/shiva/sitting/nataraj_white_stone/siva_sitting_4.jpg'], desc:'Nataraj statue in white stone, height 33 inches, width 21 inches, and thickness 12 inches.'},

{id:'s5', title:'Nataraj Statue in Pink Stone', category:'Shiva', size:'1ft', material:'Pink Stone', price:42500, img:['src/assets/photo/shiva/sitting/nataraj_pink_stone/siva_sitting_1.jpg','src/assets/photo/shiva/sitting/nataraj_pink_stone/siva_sitting_2.jpg','src/assets/photo/shiva/sitting/nataraj_pink_stone/siva_sitting_3.jpg','src/assets/photo/shiva/sitting/nataraj_pink_stone/siva_sitting_4.jpg'], desc:'Nataraj statue in pink stone, height 18 inches, width 12 inches, and thickness 6 inches.'},

{id:'s6', title:'Nandi Statue in Black Granite', category:'Shiva', size:'5ft', material:'Black Granite', price:350000, img:['src/assets/photo/shiva/sitting/5_feets_nandi/nandi_1.jpg','src/assets/photo/shiva/sitting/5_feets_nandi/nandi_2.jpg','src/assets/photo/shiva/sitting/5_feets_nandi/nandi_3.jpg','src/assets/photo/shiva/sitting/5_feets_nandi/nandi_4.jpg'], desc:'Nandi statue in black granite, height 60 inches, width 72 inches, and thickness 30 inches.'},

{id:'s7', title:'Ardha Nariswar', category:'Shiva', size:'1ft', material:'Black Granite', price:52500, img:['src/assets/photo/shiva/sitting/ardha_nariswar/ardha_nariswar_1.jpg','src/assets/photo/shiva/sitting/ardha_nariswar/ardha_nariswar_2.jpg','src/assets/photo/shiva/sitting/ardha_nariswar/ardha_nariswar_3.jpg','src/assets/photo/shiva/sitting/ardha_nariswar/ardha_nariswar_4.jpg'], desc:'Ardha Nariswar in black granite, height 22 inches, width 15 inches, and thickness 6 inches.'},

{id:'s8', title:'Nandi Statue in Grey Granite', category:'Shiva', size:'3ft', material:'Grey Granite', price:85000, img:['src/assets/photo/shiva/sitting/nandi/nandi_1.jpg','src/assets/photo/shiva/sitting/nandi/nandi_2.jpg','src/assets/photo/shiva/sitting/nandi/nandi_3.jpg','src/assets/photo/shiva/sitting/nandi/nandi_1.jpg'], desc:'Nandi statue in grey granite stone, height 36 inches, width 36 inches, and thickness 15 inches.'},
 
   
  <!--sitting Ganesh-->
  {id:'g4', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:125000, img:['src/assets/photo/ganesh/sitting/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_1.jpg'], desc:'Ganesha in black granite stone,Height 38 inch width 21 inch and thickness 14 inch.'},
  <!--{id:'g5', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:125000, img:['src/assets/photo/ganesh/sitting/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_2.jpg'], desc:'Ganesha in black granite stone,Height 38 inch width 21 inch and thickness 14 inch.'},-->
  <!--{id:'g6', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:125000, img:['src/assets/photo/ganesh/sitting/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_3.jpg'], desc:'Ganesha in black granite stone,Height 38 inch width 21 inch and thickness 14 inch.'},-->
  <!--{id:'g7', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:125000, img:['src/assets/photo/ganesh/sitting/ganesh_sitting_4.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_4.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_4.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_4.jpg'], desc:'Ganesha in black granite stone,Height 38 inch width 21 inch and thickness 14 inch.'},-->
  <!--{id:'g8', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:125000, img:['src/assets/photo/ganesh/sitting/ganesh_sitting_5.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_5.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_5.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_5.jpg'], desc:'Ganesha in black granite stone,Height 38 inch width 21 inch and thickness 14 inch.'},-->
  <!--{id:'g9', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:125000, img:['src/assets/photo/ganesh/sitting/ganesh_sitting_6.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_6.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_6.jpg','src/assets/photo/ganesh/sitting/ganesh_sitting_6.jpg'], desc:'Ganesha in black granite stone,Height 38 inch width 21 inch and thickness 14 inch.'},-->
  
  <!--sitting Ganesh: black granite-->
   {id:'g10', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:115000, img:['src/assets/photo/ganesh/sitting/black_granite/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/black_granite/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/black_granite/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/black_granite/ganesh_sitting_4.jpg'], desc:'Ganesha in black granite stone,Height 36 inch width 21 inch and thickness 12 inch.'},
  <!--{id:'g11', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:115000, img:'src/assets/photo/ganesh/sitting/black_granite/ganesh_sitting_2.jpg', desc:'Ganesha in black granite stone,Height 36 inch width 21 inch and thickness 12 inch.'},-->
  <!--{id:'g12', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:115000, img:'src/assets/photo/ganesh/sitting/black_granite/ganesh_sitting_3.jpg', desc:'Ganesha in black granite stone,Height 36 inch width 21 inch and thickness 12 inch.'},-->
  <!--{id:'g13', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:115000, img:'src/assets/photo/ganesh/sitting/black_granite/ganesh_sitting_4.jpg', desc:'Ganesha in black granite stone,Height 36 inch width 21 inch and thickness 12 inch.'},-->
  
  <!--sitting Ganesh: black granite-->
   {id:'g14', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:135000, img:['src/assets/photo/ganesh/sitting/black_granite_1/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/black_granite_1/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/black_granite_1/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/black_granite_1/ganesh_sitting_1.jpg'], desc:'Ganesha in black granite stone, Height 36 inch width 22 inch and thickness 15 inch.'},
  <!--{id:'g15', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:135000, img:'src/assets/photo/ganesh/sitting/black_granite_1/ganesh_sitting_2.jpg', desc:'Ganesha in black granite stone, Height 36 inch width 22 inch and thickness 15 inch.'},-->
  <!--{id:'g16', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:135000, img:'src/assets/photo/ganesh/sitting/black_granite_1/ganesh_sitting_3.jpg', desc:'Ganesha in black granite stone, Height 36 inch width 22 inch and thickness 15 inch.'},-->

<!--Three headed sitting Ganesh: black granite-->
   {id:'g17', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:65000, img:['src/assets/photo/ganesh/sitting/three_head/ganesh_sitting_7.jpg','src/assets/photo/ganesh/sitting/three_head/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/three_head/ganesh_sitting_4.jpg','src/assets/photo/ganesh/sitting/three_head/ganesh_sitting_5.jpg'], desc:'Three-headed Ganesha sculpture in black granite stone, height 24 inches, width 15 inches, and thickness 6 inches.'},

<!--42 inches sitting Ganesh: black granite-->
   {id:'g18', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Black Granite Stone', price:135000, img:['src/assets/photo/ganesh/sitting/42_inches/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/42_inches/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/42_inches/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/42_inches/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in black granite stone, height 42 inches, width 24 inches, and thickness 14 inches.'},
<!--4 feets sitting Ganesh: black granite-->
   {id:'g19', title:'Sitting Ganesh', category:'Ganesh', size:'4ft', material:'Black Granite Stone', price:165000, img:['src/assets/photo/ganesh/sitting/4_feet/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/4_feet/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/4_feet/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/4_feet/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in black granite stone, height 48 inches, width 26 inches, and thickness 16 inches.'},
<!--5 feets sitting Ganesh: black granite-->
   {id:'g20', title:'Sitting Ganesh', category:'Ganesh', size:'5ft', material:'Black Granite Stone', price:315000, img:['src/assets/photo/ganesh/sitting/5_feet/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/5_feet/ganesh_sitting_4.jpg','src/assets/photo/ganesh/sitting/5_feet/ganesh_sitting_5.jpg','src/assets/photo/ganesh/sitting/5_feet/ganesh_sitting_6.jpg'], desc:'Ganesha sculpture in black granite stone, height 60 inches, width 33 inches, and thickness 20 inches.'},  
<!--24 inches sitting Ganesh: black granite-->
   {id:'g21', title:'Sitting Ganesh', category:'Ganesh', size:'2ft', material:'Granite Stone', price:47500, img:['src/assets/photo/ganesh/sitting/24_inches/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/24_inches/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/24_inches/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/24_inches/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in granite stone with grey finishing, height 24 inches, width 14 inches, and thickness 8 inches.'}, 
<!--18 inches sitting Ganesh: black granite-->
   {id:'g22', title:'Sitting Ganesh', category:'Ganesh', size:'1ft', material:'Granite Stone', price:28500, img:['src/assets/photo/ganesh/sitting/18_inches/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/18_inches/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/18_inches/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/18_inches/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in granite stone with grey finishing, height 18 inches, width 10 inches, and thickness 5 inches.'},
   
<!--18 inches sitting Ganesh: Blue granite-->
   {id:'g23', title:'Sitting Ganesh', category:'Ganesh', size:'1ft', material:'Granite Stone', price:28500, img:['src/assets/photo/ganesh/sitting/Blue_Granite/18_inches/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/18_inches/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/18_inches/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/18_inches/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in blue granite stone, height 18 inches, width 10 inches, and thickness 6 inches.'},

<!--24 inches sitting Ganesh: Blue granite-->
   {id:'g24', title:'Sitting Ganesh', category:'Ganesh', size:'2ft', material:'Granite Stone', price:55000, img:['src/assets/photo/ganesh/sitting/Blue_Granite/24_inches/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/24_inches/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/24_inches/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/24_inches/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in blue granite stone, height 24 inches, width 16 inches, and thickness 8 inches.'},
<!--30 inches sitting Ganesh:  granite-->
   {id:'g25', title:'Sitting Ganesh', category:'Ganesh', size:'2ft', material:'Granite Stone', price:75000, img:['src/assets/photo/ganesh/sitting/Blue_Granite/30_inches/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/30_inches/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/30_inches/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/30_inches/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in granite stone, height 30 inches, width 18 inches, and thickness 10 inches.'},
   
<!--3 feets sitting Ganesh:  grey granite-->
   {id:'g26', title:'Sitting Ganesh', category:'Ganesh', size:'3ft', material:'Granite Stone', price:110000, img:['src/assets/photo/ganesh/sitting/Grey_Granite/3_feets/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Grey_Granite/3_feets/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Grey_Granite/3_feets/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Grey_Granite/3_feets/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in granite stone, height 36 inches, width 21 inches, and thickness 10 inches.'}, 
<!--5 feets sitting Ganesh: granite-->
   {id:'g27', title:'Sitting Ganesh', category:'Ganesh', size:'5ft', material:'Granite Stone', price:325000, img:['src/assets/photo/ganesh/sitting/Blue_Granite/5_feets/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/5_feets/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/5_feets/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/5_feets/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in granite stone, height 63 inches, width 32 inches, and thickness 16 inches.'},
<!--18 inches sitting Ganesh: granite-->
   {id:'g28', title:'Sitting Ganesh', category:'Ganesh', size:'1ft', material:'Granite Stone', price:24500, img:['src/assets/photo/ganesh/sitting/Blue_Granite/18_inches_2/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/18_inches_2/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/18_inches_2/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/18_inches_2/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in blue granite stone, height 18 inches, width 10 inches, and thickness 6 inches.'},
<!--21 inches sitting Ganesh: granite-->
   {id:'g29', title:'Sitting Ganesh', category:'Ganesh', size:'1ft', material:'Granite Stone', price:42000, img:['src/assets/photo/ganesh/sitting/Blue_Granite/21_inches/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/21_inches/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/21_inches/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/21_inches/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in blue granite stone, height 21 inches, width 14 inches, and thickness 8 inches.'},
<!--24 inches sitting Ganesh: Blue granite-->
   {id:'g30', title:'Sitting Ganesh', category:'Ganesh', size:'2ft', material:'Granite Stone', price:75000, img:['src/assets/photo/ganesh/sitting/Blue_Granite/24_inches_2/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/24_inches_2/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/24_inches_2/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/24_inches_2/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in blue granite stone, height 24 inches, width 15 inches, and thickness 10 inches.'},
<!--30 inches sitting Ganesh:  granite-->
   {id:'g31', title:'Sitting Ganesh', category:'Ganesh', size:'2ft', material:'Granite Stone', price:65000, img:['src/assets/photo/ganesh/sitting/Blue_Granite/30_inches_2/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/30_inches_2/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/30_inches_2/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/30_inches_2/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in granite stone, height 30 inches, width 18 inches, and thickness 10 inches.'},
<!--18 inches sitting Ganesh:  granite-->
   {id:'g32', title:'Baby Ganesh', category:'Ganesh', size:'1ft', material:'Granite Stone', price:32000, img:['src/assets/photo/ganesh/sitting/Blue_Granite/baby_ganesh/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/baby_ganesh/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/baby_ganesh/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/baby_ganesh/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in granite stone, height 18 inches, width 13 inches, and thickness 6 inches.'},  
<!--18 inches Singhasan sitting Ganesha Idol:  granite-->
   {id:'g33', title:'Singhasan Sitting Ganesha', category:'Ganesh', size:'1ft', material:'Granite Stone', price:35000, img:['src/assets/photo/ganesh/sitting/Blue_Granite/singhasan_18_inches/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/singhasan_18_inches/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/singhasan_18_inches/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/singhasan_18_inches/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in granite stone, height 18 inches, width 12 inches, and thickness 6 inches.'},
<!--24 inches 6 hands sitting Ganesha Idol:  granite-->
   {id:'g34', title:'6 Hands Sitting Ganesha', category:'Ganesh', size:'2ft', material:'Granite Stone', price:42000, img:['src/assets/photo/ganesh/sitting/Blue_Granite/6_hands/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/6_hands/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/6_hands/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/6_hands/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in granite stone, height 24 inches, width 15 inches, and thickness 6 inches.'},    
<!--21 inches Veena Ganesha sitting Ganesha Idol:  granite-->
   {id:'g35', title:'Veena Ganesha', category:'Ganesh', size:'1ft', material:'Granite Stone', price:48500, img:['src/assets/photo/ganesh/sitting/Blue_Granite/veena_21_inches/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/veena_21_inches/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/veena_21_inches/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/veena_21_inches/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in granite stone, height 21 inches, width 13 inches, and thickness 10 inches.'},
 <!--18 inches sitting Ganesh: granite-->
   {id:'g36', title:'Sitting Ganesh', category:'Ganesh', size:'1ft', material:'Granite Stone', price:31500, img:['src/assets/photo/ganesh/sitting/Blue_Granite/18_inches_3/ganesh_sitting_1.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/18_inches_3/ganesh_sitting_2.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/18_inches_3/ganesh_sitting_3.jpg','src/assets/photo/ganesh/sitting/Blue_Granite/18_inches_3/ganesh_sitting_4.jpg'], desc:'Ganesha sculpture in blue granite stone, height 18 inches, width 10 inches, and thickness 6 inches.'},   
  
<!--Maa or Devi-->
   {id:'m1', title:'Red Stone Saraswati', category:'Devi', size:'1ft', material:'Red Stone', price:32500, img:['src/assets/photo/maa/saraswati/red_stone/saraswati_sitting_1.jpg','src/assets/photo/maa/saraswati/red_stone/saraswati_sitting_2.jpg','src/assets/photo/maa/saraswati/red_stone/saraswati_sitting_3.jpg','src/assets/photo/maa/saraswati/red_stone/saraswati_sitting_4.jpg'], desc:'Saraswati sculpture in red natural stone, height 18 inches, width 10 inches, and thickness 6 inches.'},
   <!--White marble Saraswati-->
   {id:'m2', title:'White Marble Saraswati', category:'Devi', size:'2ft', material:'White Marble', price:65000, img:['src/assets/photo/maa/saraswati/white_marble/saraswati_sitting_1.jpg','src/assets/photo/maa/saraswati/white_marble/saraswati_sitting_2.jpg','src/assets/photo/maa/saraswati/white_marble/saraswati_sitting_3.jpg','src/assets/photo/maa/saraswati/white_marble/saraswati_sitting_4.jpg'], desc:'Saraswati sculpture in white marble, height 26 inches, width 18 inches, and thickness 9 inches.'}, 
   <!--Grey stone Saraswati statue-->
   {id:'m3', title:'Grey stone Saraswati', category:'Devi', size:'2ft', material:'Grey Stone', price:65000, img:['src/assets/photo/maa/saraswati/grey_stone/saraswati_sitting_1.jpg','src/assets/photo/maa/saraswati/grey_stone/saraswati_sitting_2.jpg','src/assets/photo/maa/saraswati/grey_stone/saraswati_sitting_3.jpg','src/assets/photo/maa/saraswati/grey_stone/saraswati_sitting_4.jpg'], desc:'Saraswati sculpture in grey stone, height 28 inches, width 19 inches, and thickness 10 inches.'}, 
   <!--Maa Kali head bust-->
   {id:'m4', title:'Grey stone Kali head bust', category:'Devi', size:'2ft', material:'Grey Stone', price:42500, img:['src/assets/photo/maa/kali/head_bust/kali_sitting_1.jpg','src/assets/photo/maa/kali/head_bust/kali_sitting_2.jpg','src/assets/photo/maa/kali/head_bust/kali_sitting_3.jpg','src/assets/photo/maa/kali/head_bust/kali_sitting_4.jpg'], desc:'Maa Kali head bust sculpture in grey stone, height 18 inches, width 15 inches, and thickness 6 inches.'},     

   
   
];

/* Render utilities */
const grid = document.getElementById('productGrid');
const sizeFilter = document.getElementById('sizeFilter');
const catFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');

function money(n){ return '₹' + n.toLocaleString('en-IN'); }

function productCard(p){
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <div class="thumb" data-quick="${p.id}" style="background-image:url('${p.img[0]}');background-size:contain;background-position:center;background-repeat:no-repeat; cursor:pointer">
      <span class="tag">${p.size}</span>
    </div>
    <div class="card-body">
      <h3>${p.title}</h3>
      <div class="small">${p.category} • ${p.material}</div>
      <div class="price-row">
        <strong class="price">${money(p.price)}</strong>
        <div>
          <button class="btn ghost" data-quick="${p.id}">Quick View</button>
          <button class="btn primary" data-add="${p.id}">Add</button>
        </div>
      </div>
    </div>`;
  return el;
}

function render(){
  grid.innerHTML='';
  const q = searchInput.value.trim().toLowerCase();
  const s = sizeFilter.value;
  const c = catFilter.value;
  const filtered = PRODUCTS.filter(p => 
    (!q || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)) &&
    (!s || p.size === s) &&
    (!c || p.category === c)
  );
  if(!filtered.length){ grid.innerHTML = '<p class="small">No items match your filters.</p>'; return; }
  filtered.forEach(p => grid.appendChild(productCard(p)));
}
[sizeFilter, catFilter, searchInput].forEach(el => el.addEventListener('input', render));
render();

/* Category shortcuts */
document.querySelectorAll('.cat-card').forEach(el => {
  el.addEventListener('click', () => { 
    catFilter.value = el.dataset.filter; 
    window.location.hash = '#catalog';
    render(); 
  });
});

/* Modal */
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalSize = document.getElementById('modalSize');
const modalMaterial = document.getElementById('modalMaterial');
const modalCategory = document.getElementById('modalCategory');
const modalPrice = document.getElementById('modalPrice');
const modalAdd = document.getElementById('modalAdd');

grid.addEventListener('click', (e) => {
  const quickId = e.target.getAttribute('data-quick');
  const addId = e.target.getAttribute('data-add');
  if (quickId){ openModal(quickId); }
  if (addId){ addToCart(addId); }
});
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

const mainImg = document.getElementById('main-img');
      const magnifier = document.getElementById('magnifier');
	  magnifier.style.cursor = 'pointer';
      const zoomResult = document.getElementById('zoom-result');
      const imgContainer = document.getElementById('img-container');
      zoomResult.style.display = 'none';

      let zoomLevel = 2.5; // zoom strength
	  const isMobile = window.innerWidth <= 767;
	  $('.thumbnails').html("");
      p.img.forEach((src, i) => {
        $('.thumbnails').append(
          `<img class="thumbtwo" data-index="${i}" data-large="${src}" src="${src}" alt="thumbtwo-${i}">`
        );
      });
      $('.thumbtwo').first().addClass('active');
      mainImg.src = p.img[0];
      // Move magnifier
      function moveMagnifier(e) {
        const rect = imgContainer.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        const mw = magnifier.offsetWidth / 2;
        const mh = magnifier.offsetHeight / 2;

        if (x < mw) x = mw;
        if (y < mh) y = mh;
        if (x > rect.width - mw) x = rect.width - mw;
        if (y > rect.height - mh) y = rect.height - mh;

        magnifier.style.left = x - mw + 'px';
        magnifier.style.top = y - mh + 'px';

        zoomResult.style.backgroundPosition = `-${x * zoomLevel - 200}px -${
          y * zoomLevel - 200
        }px`;
      }
if (!isMobile) {
      imgContainer.addEventListener('mouseenter', () => {
        magnifier.style.display = 'block';
        zoomResult.style.display = 'block';
      });

      imgContainer.addEventListener('mouseleave', () => {
        magnifier.style.display = 'none';
        zoomResult.style.display = 'none';
      });

      imgContainer.addEventListener('mousemove', moveMagnifier);
    }
      // Thumbnail click
      document.querySelectorAll('.thumbtwo').forEach((thumb) => {
        thumb.addEventListener('click', function () {
          document
            .querySelectorAll('.thumbtwo')
            .forEach((t) => t.classList.remove('active'));

          this.classList.add('active');

          const large = this.getAttribute('data-large');

          mainImg.src = large;
          zoomResult.style.backgroundImage = `url(${large})`;
        });
      });

      // Initial zoom background
      zoomResult.style.backgroundImage = `url(${mainImg.src})`;

  
if (isMobile) {
  magnifier.style.display = 'none';
  zoomResult.style.display = 'none';
}

 

  // Fill modal details
 // modalImage.alt = p.title;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalSize.textContent = p.size;
  modalMaterial.textContent = p.material;
  modalCategory.textContent = p.category;
  modalPrice.textContent = money(p.price);
  modalAdd.onclick = () => addToCart(p.id);

  modal.showModal();
}

/* Cart */
const cart = document.getElementById('cart');
const cartBackdrop = document.getElementById('cartBackdrop');
const cartButton = document.getElementById('cartButton');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
let CART = [];

function saveCart(){ localStorage.setItem('cart', JSON.stringify(CART)); }
function loadCart(){ CART = JSON.parse(localStorage.getItem('cart')||'[]'); updateCart(); }
function openCart(){ cart.classList.add('open'); cartBackdrop.classList.add('show'); }
function hideCart(){ cart.classList.remove('open'); cartBackdrop.classList.remove('show'); }
cartButton.addEventListener('click', openCart);
closeCart.addEventListener('click', hideCart);
cartBackdrop.addEventListener('click', hideCart);

function addToCart(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  const line = CART.find(l => l.id === id);
  if(line) line.qty += 1; else CART.push({id:p.id, title:p.title, price:p.price, img:p.img[0], qty:1});
  updateCart(); openCart(); saveCart();
}

function updateCart(){
  cartItems.innerHTML='';
  let total = 0, count = 0;
  CART.forEach(line => {
    total += line.qty * line.price; count += line.qty;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${line.img}" alt="" width="56" height="56" style="border-radius:8px;object-fit:cover"/>
      <div>
        <div><strong>${line.title}</strong></div>
        <div class="small">${money(line.price)} × ${line.qty}</div>
      </div>
      <div style="display:flex; gap:6px; align-items:center">
        <button class="icon-btn" data-dec="${line.id}">−</button>
        <button class="icon-btn" data-inc="${line.id}">+</button>
        <button class="icon-btn" data-del="${line.id}">✕</button>
      </div>`;
    cartItems.appendChild(row);
  });
  cartTotal.textContent = money(total);
  cartCount.textContent = count;
}

cartItems.addEventListener('click', (e) => {
  const dec = e.target.getAttribute('data-dec');
  const inc = e.target.getAttribute('data-inc');
  const del = e.target.getAttribute('data-del');
  if(dec){ const i=CART.findIndex(l=>l.id===dec); if(i>-1){ CART[i].qty=Math.max(0,CART[i].qty-1); if(!CART[i].qty) CART.splice(i,1);}}
  if(inc){ const i=CART.findIndex(l=>l.id===inc); if(i>-1){ CART[i].qty++; }}
  if(del){ const i=CART.findIndex(l=>l.id===del); if(i>-1){ CART.splice(i,1);}}
  updateCart(); saveCart();
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  /*alert('Demo checkout. Add your payment flow here.');*/
  alert('Payment Gateway Under Consruction!. Contact @+91-7504299519 or ommstoneart@gmail.com');  
});

document.getElementById('year').textContent = new Date().getFullYear();
loadCart();

/* Close modal on native button */
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
