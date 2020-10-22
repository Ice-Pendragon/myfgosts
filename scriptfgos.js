$(function () {
	$('#btn').click(function() {
		console.log('レアリティ：');
		console.log($('[name="Rare"]:checked').val());
		
		var $rarepoint=0;
		var $classpoint=0;
		var $statepoint=0;
		var $parapoint=0;
		var $parapoint2=0;
		var $parapoint3=0;
		var $parapoint4=0;
		var $Apoint=0;
		
		var $HP;
		var $ATK;
		
		var NA;
		var SR;
		var SW;
		
		//=======================================
		//MAX HP
		var $RareOut=0;
		if($('[name="Rare"]:checked').val() == "R0"){
		$RareOut='0(2)';
		$rarepoint=8500;
		}else if($('[name="Rare"]:checked').val() == "R1"){
		$RareOut=1;
		$rarepoint=7500;
		}else if($('[name="Rare"]:checked').val() == "R2"){
		$RareOut=2;
		$rarepoint=8500;
		}else if($('[name="Rare"]:checked').val() == "R3"){
		$RareOut=3;
		$rarepoint=10000;
		}else if($('[name="Rare"]:checked').val() == "R4"){
		$RareOut=4;
		$rarepoint=12500;
		}else if($('[name="Rare"]:checked').val() == "R5"){
		$RareOut=5;
		$rarepoint=15000;
		}
		
		
		if($('[name="Class"]:checked').val() == "Shielder"){
		$classpoint=1.01;
		}else if($('[name="Class"]:checked').val() == "Saber"){
		$classpoint=1.01;
		}else if($('[name="Class"]:checked').val() == "Archer"){
		$classpoint=0.98;
		}else if($('[name="Class"]:checked').val() == "Lancer"){
		$classpoint=1.02;
		}else if($('[name="Class"]:checked').val() == "Rider"){
		$classpoint=0.96;
		}else if($('[name="Class"]:checked').val() == "Caster"){
		$classpoint=0.98;
		}else if($('[name="Class"]:checked').val() == "Assassin"){
		$classpoint=0.95;
		}else if($('[name="Class"]:checked').val() == "Berserker"){
		$classpoint=0.9;
		}else if($('[name="Class"]:checked').val() == "Ruler"){
		$classpoint=1.00;
		}else if($('[name="Class"]:checked').val() == "Avenger"){
		$classpoint=0.88;
		}else if($('[name="Class"]:checked').val() == "MoonCancer"){
		$classpoint=1.05;
		}else if($('[name="Class"]:checked').val() == "Alterego"){
		$classpoint=0.95;
		}else if($('[name="Class"]:checked').val() == "Foreigner"){
		$classpoint=1.00;
		}
		
		
		if($('[name="State"]:checked').val() == "S1"){
		$statepoint=1.1;
		}else if($('[name="State"]:checked').val() == "S2"){
		$statepoint=1.05;
		}else if($('[name="State"]:checked').val() == "S3"){
		$statepoint=1.0;
		}else if($('[name="State"]:checked').val() == "S4"){
		$statepoint=0.95;
		}else if($('[name="State"]:checked').val() == "S5"){
		$statepoint=0.9;
		}else if($('[name="State"]:checked').val() == "S6"){
		$statepoint=0.85;
		}
		
		if($('[name="Tai"]:checked').val() == "TaiEX"){
		$parapoint=1.04;
		}else if($('[name="Tai"]:checked').val() == "TaiA2"){
		$parapoint=1.03;
		}else if($('[name="Tai"]:checked').val() == "TaiA1"){
		$parapoint=1.025;
		}else if($('[name="Tai"]:checked').val() == "TaiA"){
		$parapoint=1.02;
		}else if($('[name="Tai"]:checked').val() == "TaiAm"){
		$parapoint=1.015;
		}else if($('[name="Tai"]:checked').val() == "TaiB2"){
		$parapoint=1.01;
		}else if($('[name="Tai"]:checked').val() == "TaiB1"){
		$parapoint=1.005;
		}else if($('[name="Tai"]:checked').val() == "TaiB"){
		$parapoint=1.00;
		}else if($('[name="Tai"]:checked').val() == "TaiBm"){
		$parapoint=0.9975;
		}else if($('[name="Tai"]:checked').val() == "TaiC2"){
		$parapoint=0.995;
		}else if($('[name="Tai"]:checked').val() == "TaiC1"){
		$parapoint=0.9925;
		}else if($('[name="Tai"]:checked').val() == "TaiC"){
		$parapoint=0.99;
		}else if($('[name="Tai"]:checked').val() == "TaiCm"){
		$parapoint=0.9875;
		}else if($('[name="Tai"]:checked').val() == "TaiD2"){
		$parapoint=0.985;
		}else if($('[name="Tai"]:checked').val() == "TaiD1"){
		$parapoint=0.9825;
		}else if($('[name="Tai"]:checked').val() == "TaiD"){
		$parapoint=0.98;
		}else if($('[name="Tai"]:checked').val() == "TaiDm"){
		$parapoint=0.9775;
		}else if($('[name="Tai"]:checked').val() == "TaiE2"){
		$parapoint=0.975;
		}else if($('[name="Tai"]:checked').val() == "TaiE1"){
		$parapoint=0.9725;
		}else if($('[name="Tai"]:checked').val() == "TaiE"){
		$parapoint=0.97;
		}else if($('[name="Tai"]:checked').val() == "TaiEm"){
		$parapoint=0.9675;
		}
		
		$HP=Math.floor($rarepoint*$classpoint*$statepoint*$parapoint);
		
		//=======================================
		//MAX ATK
		$rarepoint=0;
		$classpoint=0;
		$statepoint=0;
		$parapoint=0;
		
		if($('[name="Rare"]:checked').val() == "R0"){
		$rarepoint=6200;
		}else if($('[name="Rare"]:checked').val() == "R1"){
		$rarepoint=5500;
		}else if($('[name="Rare"]:checked').val() == "R2"){
		$rarepoint=6200;
		}else if($('[name="Rare"]:checked').val() == "R3"){
		$rarepoint=7000;
		}else if($('[name="Rare"]:checked').val() == "R4"){
		$rarepoint=9000;
		}else if($('[name="Rare"]:checked').val() == "R5"){
		$rarepoint=11000;
		}
		
		if($('[name="Class"]:checked').val() == "Shielder"){
		$classpoint=0.99;
		}else if($('[name="Class"]:checked').val() == "Saber"){
		$classpoint=1.01;
		}else if($('[name="Class"]:checked').val() == "Archer"){
		$classpoint=1.02;
		}else if($('[name="Class"]:checked').val() == "Lancer"){
		$classpoint=0.98;
		}else if($('[name="Class"]:checked').val() == "Rider"){
		$classpoint=0.97;
		}else if($('[name="Class"]:checked').val() == "Caster"){
		$classpoint=0.94;
		}else if($('[name="Class"]:checked').val() == "Assassin"){
		$classpoint=0.96;
		}else if($('[name="Class"]:checked').val() == "Berserker"){
		$classpoint=1.03;
		}else if($('[name="Class"]:checked').val() == "Ruler"){
		$classpoint=0.95;
		}else if($('[name="Class"]:checked').val() == "Avenger"){
		$classpoint=1.05;
		}else if($('[name="Class"]:checked').val() == "MoonCancer"){
		$classpoint=0.94;
		}else if($('[name="Class"]:checked').val() == "Alterego"){
		$classpoint=1.02;
		}else if($('[name="Class"]:checked').val() == "Foreigner"){
		$classpoint=1.00;
		}
		
		if($('[name="State"]:checked').val() == "S1"){
		$statepoint=0.9;
		}else if($('[name="State"]:checked').val() == "S2"){
		$statepoint=0.95;
		}else if($('[name="State"]:checked').val() == "S3"){
		$statepoint=1.0;
		}else if($('[name="State"]:checked').val() == "S4"){
		$statepoint=1.05;
		}else if($('[name="State"]:checked').val() == "S5"){
		$statepoint=1.1;
		}else if($('[name="State"]:checked').val() == "S6"){
		$statepoint=0.85;
		}
		
		if($('[name="BM"]:checked').val() == "BMB"){
		if($('[name="Kin"]:checked').val() == "KinEX"){
		$parapoint=1.04;
		}else if($('[name="Kin"]:checked').val() == "KinA2"){
		$parapoint=1.03;
		}else if($('[name="Kin"]:checked').val() == "KinA1"){
		$parapoint=1.025;
		}else if($('[name="Kin"]:checked').val() == "KinA"){
		$parapoint=1.02;
		}else if($('[name="Kin"]:checked').val() == "KinAm"){
		$parapoint=1.015;
		}else if($('[name="Kin"]:checked').val() == "KinB2"){
		$parapoint=1.01;
		}else if($('[name="Kin"]:checked').val() == "KinB1"){
		$parapoint=1.005;
		}else if($('[name="Kin"]:checked').val() == "KinB"){
		$parapoint=1.00;
		}else if($('[name="Kin"]:checked').val() == "KinBm"){
		$parapoint=0.9975;
		}else if($('[name="Kin"]:checked').val() == "KinC2"){
		$parapoint=0.995;
		}else if($('[name="Kin"]:checked').val() == "KinC1"){
		$parapoint=0.9925;
		}else if($('[name="Kin"]:checked').val() == "KinC"){
		$parapoint=0.99;
		}else if($('[name="Kin"]:checked').val() == "KinCm"){
		$parapoint=0.9875;
		}else if($('[name="Kin"]:checked').val() == "KinD2"){
		$parapoint=0.985;
		}else if($('[name="Kin"]:checked').val() == "KinD1"){
		$parapoint=0.9825;
		}else if($('[name="Kin"]:checked').val() == "KinD"){
		$parapoint=0.98;
		}else if($('[name="Kin"]:checked').val() == "KinDm"){
		$parapoint=0.9775;
		}else if($('[name="Kin"]:checked').val() == "KinE2"){
		$parapoint=0.975;
		}else if($('[name="Kin"]:checked').val() == "KinE1"){
		$parapoint=0.9725;
		}else if($('[name="Kin"]:checked').val() == "KinE"){
		$parapoint=0.97;
		}else if($('[name="Kin"]:checked').val() == "KinEm"){
		$parapoint=0.9675;
		}
		
		if($('[name="Bin"]:checked').val() == "BinEX"){
		$parapoint2=1.04;
		}else if($('[name="Bin"]:checked').val() == "BinA2"){
		$parapoint2=1.03;
		}else if($('[name="Bin"]:checked').val() == "BinA1"){
		$parapoint2=1.025;
		}else if($('[name="Bin"]:checked').val() == "BinA"){
		$parapoint2=1.02;
		}else if($('[name="Bin"]:checked').val() == "BinAm"){
		$parapoint2=1.015;
		}else if($('[name="Bin"]:checked').val() == "BinB2"){
		$parapoint2=1.01;
		}else if($('[name="Bin"]:checked').val() == "BinB1"){
		$parapoint2=1.005;
		}else if($('[name="Bin"]:checked').val() == "BinB"){
		$parapoint2=1.00;
		}else if($('[name="Bin"]:checked').val() == "BinBm"){
		$parapoint2=0.9975;
		}else if($('[name="Bin"]:checked').val() == "BinC2"){
		$parapoint2=0.995;
		}else if($('[name="Bin"]:checked').val() == "BinC1"){
		$parapoint2=0.9925;
		}else if($('[name="Bin"]:checked').val() == "BinC"){
		$parapoint2=0.99;
		}else if($('[name="Bin"]:checked').val() == "BinCm"){
		$parapoint2=0.9875;
		}else if($('[name="Bin"]:checked').val() == "BinD2"){
		$parapoint2=0.985;
		}else if($('[name="Bin"]:checked').val() == "BinD1"){
		$parapoint2=0.9825;
		}else if($('[name="Bin"]:checked').val() == "BinD"){
		$parapoint2=0.98;
		}else if($('[name="Bin"]:checked').val() == "BinDm"){
		$parapoint2=0.9775;
		}else if($('[name="Bin"]:checked').val() == "BinE2"){
		$parapoint2=0.975;
		}else if($('[name="Bin"]:checked').val() == "BinE1"){
		$parapoint2=0.9725;
		}else if($('[name="Bin"]:checked').val() == "BinE"){
		$parapoint2=0.97;
		}else if($('[name="Bin"]:checked').val() == "BinEm"){
		$parapoint2=0.9675;
		}
		
		if($('[name="Mar"]:checked').val() == "MarEX"){
		$parapoint3=1.04;
		}else if($('[name="Mar"]:checked').val() == "MarA2"){
		$parapoint3=1.03;
		}else if($('[name="Mar"]:checked').val() == "MarA1"){
		$parapoint3=1.025;
		}else if($('[name="Mar"]:checked').val() == "MarA"){
		$parapoint3=1.02;
		}else if($('[name="Mar"]:checked').val() == "MarAm"){
		$parapoint3=1.015;
		}else if($('[name="Mar"]:checked').val() == "MarB2"){
		$parapoint3=1.01;
		}else if($('[name="Mar"]:checked').val() == "MarB1"){
		$parapoint3=1.005;
		}else if($('[name="Mar"]:checked').val() == "MarB"){
		$parapoint3=1.00;
		}else if($('[name="Mar"]:checked').val() == "MarBm"){
		$parapoint3=0.9975;
		}else if($('[name="Mar"]:checked').val() == "MarC2"){
		$parapoint3=0.995;
		}else if($('[name="Mar"]:checked').val() == "MarC1"){
		$parapoint3=0.9925;
		}else if($('[name="Mar"]:checked').val() == "MarC"){
		$parapoint3=0.99;
		}else if($('[name="Mar"]:checked').val() == "MarCm"){
		$parapoint3=0.9875;
		}else if($('[name="Mar"]:checked').val() == "MarD2"){
		$parapoint3=0.985;
		}else if($('[name="Mar"]:checked').val() == "MarD1"){
		$parapoint3=0.9825;
		}else if($('[name="Mar"]:checked').val() == "MarD"){
		$parapoint3=0.98;
		}else if($('[name="Mar"]:checked').val() == "MarDm"){
		$parapoint3=0.9775;
		}else if($('[name="Mar"]:checked').val() == "MarE2"){
		$parapoint3=0.975;
		}else if($('[name="Mar"]:checked').val() == "MarE1"){
		$parapoint3=0.9725;
		}else if($('[name="Mar"]:checked').val() == "MarE"){
		$parapoint3=0.97;
		}else if($('[name="Mar"]:checked').val() == "MarEm"){
		$parapoint3=0.9675;
		}
		
		$parapoint4=($parapoint2+$parapoint3)/2;
		
		
		$ATK=Math.floor($rarepoint*$classpoint*$statepoint*$parapoint*$parapoint4*(1-($parapoint-1)*($parapoint4-1)));
		
		}else if($('[name="BM"]:checked').val() == "BMM"){
		if($('[name="Mar"]:checked').val() == "MarEX"){
		$parapoint=1.04;
		}else if($('[name="Mar"]:checked').val() == "MarA2"){
		$parapoint=1.03;
		}else if($('[name="Mar"]:checked').val() == "MarA1"){
		$parapoint=1.025;
		}else if($('[name="Mar"]:checked').val() == "MarA"){
		$parapoint=1.02;
		}else if($('[name="Mar"]:checked').val() == "MarAm"){
		$parapoint=1.015;
		}else if($('[name="Mar"]:checked').val() == "MarB2"){
		$parapoint=1.01;
		}else if($('[name="Mar"]:checked').val() == "MarB1"){
		$parapoint=1.005;
		}else if($('[name="Mar"]:checked').val() == "MarB"){
		$parapoint=1.00;
		}else if($('[name="Mar"]:checked').val() == "MarBm"){
		$parapoint=0.9975;
		}else if($('[name="Mar"]:checked').val() == "MarC2"){
		$parapoint=0.995;
		}else if($('[name="Mar"]:checked').val() == "MarC1"){
		$parapoint=0.9925;
		}else if($('[name="Mar"]:checked').val() == "MarC"){
		$parapoint=0.99;
		}else if($('[name="Mar"]:checked').val() == "MarCm"){
		$parapoint=0.9875;
		}else if($('[name="Mar"]:checked').val() == "MarD2"){
		$parapoint=0.985;
		}else if($('[name="Mar"]:checked').val() == "MarD1"){
		$parapoint=0.9825;
		}else if($('[name="Mar"]:checked').val() == "MarD"){
		$parapoint=0.98;
		}else if($('[name="Mar"]:checked').val() == "MarDm"){
		$parapoint=0.9775;
		}else if($('[name="Mar"]:checked').val() == "MarE2"){
		$parapoint=0.975;
		}else if($('[name="Mar"]:checked').val() == "MarE1"){
		$parapoint=0.9725;
		}else if($('[name="Mar"]:checked').val() == "MarE"){
		$parapoint=0.97;
		}else if($('[name="Mar"]:checked').val() == "MarEm"){
		$parapoint=0.9675;
		}
		$ATK=Math.floor($rarepoint*$classpoint*$statepoint*$parapoint);
		}
		
		//=======================================
		//NA(NP獲得率基本値)
		if($('[name="Class"]:checked').val() == "Shielder"){
		$classpoint=1.5;
		}else if($('[name="Class"]:checked').val() == "Saber"){
		$classpoint=1.5;
		}else if($('[name="Class"]:checked').val() == "Archer"){
		$classpoint=1.55;
		}else if($('[name="Class"]:checked').val() == "Lancer"){
		$classpoint=1.45;
		}else if($('[name="Class"]:checked').val() == "Rider"){
		$classpoint=1.55;
		}else if($('[name="Class"]:checked').val() == "Caster"){
		$classpoint=1.6;
		}else if($('[name="Class"]:checked').val() == "Assassin"){
		$classpoint=1.45;
		}else if($('[name="Class"]:checked').val() == "Berserker"){
		$classpoint=1.4;
		}else if($('[name="Class"]:checked').val() == "Ruler"){
		$classpoint=1.5;
		}else if($('[name="Class"]:checked').val() == "Avenger"){
		$classpoint=1.45;
		}else if($('[name="Class"]:checked').val() == "MoonCancer"){
		$classpoint=1.6;
		}else if($('[name="Class"]:checked').val() == "Alterego"){
		$classpoint=1.55;
		}else if($('[name="Class"]:checked').val() == "Foreigner"){
		$classpoint=1.5;
		}
		
		if($('[name="Mar"]:checked').val() == "MarEX"){
		$parapoint=1.04;
		}else if($('[name="Mar"]:checked').val() == "MarA2"){
		$parapoint=1.03;
		}else if($('[name="Mar"]:checked').val() == "MarA1"){
		$parapoint=1.025;
		}else if($('[name="Mar"]:checked').val() == "MarA"){
		$parapoint=1.02;
		}else if($('[name="Mar"]:checked').val() == "MarAm"){
		$parapoint=1.015;
		}else if($('[name="Mar"]:checked').val() == "MarB2"){
		$parapoint=1.01;
		}else if($('[name="Mar"]:checked').val() == "MarB1"){
		$parapoint=1.005;
		}else if($('[name="Mar"]:checked').val() == "MarB"){
		$parapoint=1.00;
		}else if($('[name="Mar"]:checked').val() == "MarBm"){
		$parapoint=0.9975;
		}else if($('[name="Mar"]:checked').val() == "MarC2"){
		$parapoint=0.995;
		}else if($('[name="Mar"]:checked').val() == "MarC1"){
		$parapoint=0.9925;
		}else if($('[name="Mar"]:checked').val() == "MarC"){
		$parapoint=0.99;
		}else if($('[name="Mar"]:checked').val() == "MarCm"){
		$parapoint=0.9875;
		}else if($('[name="Mar"]:checked').val() == "MarD2"){
		$parapoint=0.985;
		}else if($('[name="Mar"]:checked').val() == "MarD1"){
		$parapoint=0.9825;
		}else if($('[name="Mar"]:checked').val() == "MarD"){
		$parapoint=0.98;
		}else if($('[name="Mar"]:checked').val() == "MarDm"){
		$parapoint=0.9775;
		}else if($('[name="Mar"]:checked').val() == "MarE2"){
		$parapoint=0.975;
		}else if($('[name="Mar"]:checked').val() == "MarE1"){
		$parapoint=0.9725;
		}else if($('[name="Mar"]:checked').val() == "MarE"){
		$parapoint=0.97;
		}else if($('[name="Mar"]:checked').val() == "MarEm"){
		$parapoint=0.9675;
		}
		
		if($('[name="Arts"]:checked').val() == "A1"){
		$Apoint=1.5;
		}else if($('[name="Arts"]:checked').val() == "A2"){
		$Apoint=1.125;
		}else if($('[name="Arts"]:checked').val() == "A3"){
		$Apoint=1.0;
		}
		
		$NA=Math.floor(100*$classpoint*$parapoint*$Apoint)/100;
		
		//=======================================
		//SR(スター発生率基本値)
		if($('[name="Class"]:checked').val() == "Shielder"){
		$classpoint=10;
		}else if($('[name="Class"]:checked').val() == "Saber"){
		$classpoint=10;
		}else if($('[name="Class"]:checked').val() == "Archer"){
		$classpoint=8;
		}else if($('[name="Class"]:checked').val() == "Lancer"){
		$classpoint=12;
		}else if($('[name="Class"]:checked').val() == "Rider"){
		$classpoint=9;
		}else if($('[name="Class"]:checked').val() == "Caster"){
		$classpoint=11;
		}else if($('[name="Class"]:checked').val() == "Assassin"){
		$classpoint=25;
		}else if($('[name="Class"]:checked').val() == "Berserker"){
		$classpoint=5;
		}else if($('[name="Class"]:checked').val() == "Ruler"){
		$classpoint=10;
		}else if($('[name="Class"]:checked').val() == "Avenger"){
		$classpoint=6;
		}else if($('[name="Class"]:checked').val() == "MoonCancer"){
		$classpoint=15;
		}else if($('[name="Class"]:checked').val() == "Alterego"){
		$classpoint=10;
		}else if($('[name="Class"]:checked').val() == "Foreigner"){
		$classpoint=15;
		}
		
		if($('[name="Bin"]:checked').val() == "BinEX"){
		$parapoint=1.04;
		}else if($('[name="Bin"]:checked').val() == "BinA2"){
		$parapoint=1.03;
		}else if($('[name="Bin"]:checked').val() == "BinA1"){
		$parapoint=1.025;
		}else if($('[name="Bin"]:checked').val() == "BinA"){
		$parapoint=1.02;
		}else if($('[name="Bin"]:checked').val() == "BinAm"){
		$parapoint=1.015;
		}else if($('[name="Bin"]:checked').val() == "BinB2"){
		$parapoint=1.01;
		}else if($('[name="Bin"]:checked').val() == "BinB1"){
		$parapoint=1.005;
		}else if($('[name="Bin"]:checked').val() == "BinB"){
		$parapoint=1.00;
		}else if($('[name="Bin"]:checked').val() == "BinBm"){
		$parapoint=0.9975;
		}else if($('[name="Bin"]:checked').val() == "BinC2"){
		$parapoint=0.995;
		}else if($('[name="Bin"]:checked').val() == "BinC1"){
		$parapoint=0.9925;
		}else if($('[name="Bin"]:checked').val() == "BinC"){
		$parapoint=0.99;
		}else if($('[name="Bin"]:checked').val() == "BinCm"){
		$parapoint=0.9875;
		}else if($('[name="Bin"]:checked').val() == "BinD2"){
		$parapoint=0.985;
		}else if($('[name="Bin"]:checked').val() == "BinD1"){
		$parapoint=0.9825;
		}else if($('[name="Bin"]:checked').val() == "BinD"){
		$parapoint=0.98;
		}else if($('[name="Bin"]:checked').val() == "BinDm"){
		$parapoint=0.9775;
		}else if($('[name="Bin"]:checked').val() == "BinE2"){
		$parapoint=0.975;
		}else if($('[name="Bin"]:checked').val() == "BinE1"){
		$parapoint=0.9725;
		}else if($('[name="Bin"]:checked').val() == "BinE"){
		$parapoint=0.97;
		}else if($('[name="Bin"]:checked').val() == "BinEm"){
		$parapoint=0.9675;
		}
		
		if($('[name="Star"]:checked').val() == "SR1"){
		$SR=Math.floor(10*$classpoint*$parapoint)/10;
		}else if($('[name="Star"]:checked').val() == "SR2"){
		$SR=Math.floor(10*$classpoint*((1+$parapoint)/2))/10;
		}
		
		//=======================================
		//SW(スター集中度)
		if($('[name="Class"]:checked').val() == "Shielder"){
		$classpoint=100;
		}else if($('[name="Class"]:checked').val() == "Saber"){
		$classpoint=100;
		}else if($('[name="Class"]:checked').val() == "Archer"){
		$classpoint=150;
		}else if($('[name="Class"]:checked').val() == "Lancer"){
		$classpoint=90;
		}else if($('[name="Class"]:checked').val() == "Rider"){
		$classpoint=200;
		}else if($('[name="Class"]:checked').val() == "Caster"){
		$classpoint=50;
		}else if($('[name="Class"]:checked').val() == "Assassin"){
		$classpoint=100;
		}else if($('[name="Class"]:checked').val() == "Berserker"){
		$classpoint=10;
		}else if($('[name="Class"]:checked').val() == "Ruler"){
		$classpoint=100;
		}else if($('[name="Class"]:checked').val() == "Avenger"){
		$classpoint=30;
		}else if($('[name="Class"]:checked').val() == "MoonCancer"){
		$classpoint=50;
		}else if($('[name="Class"]:checked').val() == "Alterego"){
		$classpoint=100;
		}else if($('[name="Class"]:checked').val() == "Foreigner"){
		$classpoint=150;
		}
		
		if($('[name="Luc"]:checked').val() == "LucEX"){
		$parapoint=1.04;
		}else if($('[name="Luc"]:checked').val() == "LucA2"){
		$parapoint=1.03;
		}else if($('[name="Luc"]:checked').val() == "LucA1"){
		$parapoint=1.025;
		}else if($('[name="Luc"]:checked').val() == "LucA"){
		$parapoint=1.02;
		}else if($('[name="Luc"]:checked').val() == "LucAm"){
		$parapoint=1.015;
		}else if($('[name="Luc"]:checked').val() == "LucB2"){
		$parapoint=1.01;
		}else if($('[name="Luc"]:checked').val() == "LucB1"){
		$parapoint=1.005;
		}else if($('[name="Luc"]:checked').val() == "LucB"){
		$parapoint=1.00;
		}else if($('[name="Luc"]:checked').val() == "LucBm"){
		$parapoint=0.9975;
		}else if($('[name="Luc"]:checked').val() == "LucC2"){
		$parapoint=0.995;
		}else if($('[name="Luc"]:checked').val() == "LucC1"){
		$parapoint=0.9925;
		}else if($('[name="Luc"]:checked').val() == "LucC"){
		$parapoint=0.99;
		}else if($('[name="Luc"]:checked').val() == "LucCm"){
		$parapoint=0.9875;
		}else if($('[name="Luc"]:checked').val() == "LucD2"){
		$parapoint=0.985;
		}else if($('[name="Luc"]:checked').val() == "LucD1"){
		$parapoint=0.9825;
		}else if($('[name="Luc"]:checked').val() == "LucD"){
		$parapoint=0.98;
		}else if($('[name="Luc"]:checked').val() == "LucDm"){
		$parapoint=0.9775;
		}else if($('[name="Luc"]:checked').val() == "LucE2"){
		$parapoint=0.975;
		}else if($('[name="Luc"]:checked').val() == "LucE1"){
		$parapoint=0.9725;
		}else if($('[name="Luc"]:checked').val() == "LucE"){
		$parapoint=0.97;
		}else if($('[name="Luc"]:checked').val() == "LucEm"){
		$parapoint=0.9675;
		}
		
		$SW=Math.floor($classpoint*$parapoint);
		
		//=======================================
		//OutPut
		$('#OutPut').val(' レアリティ '+$RareOut+'\n HP '+$HP+'\n ATK '+$ATK+'\n NP獲得率基本値 '+$NA+'／Artsヒット数 \n スター発生率基本値 '+$SR+'\n スター集中度 '+$SW);
		
		
		
		
		
		})
	});