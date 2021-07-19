$(function () {
	$('#btn').click(function() {
		//constants
		const $rarepoint = {	//about rarity
			lvmax:[NaN, 60, 65, 70, 80, 90],
			hplv1:[NaN, 1500, 1600, 1800, 2000, 2200],
			hpmax:[NaN, 7500, 8500, 10000, 12500, 15000],
			atklv1:[NaN, 1000, 1100, 1300, 1500, 1700],
			atkmax:[NaN, 5500, 6200, 7000, 9000, 11000],
			name:["★0","C ☆","UC ☆☆","R ☆☆☆","SR ☆☆☆☆","SSR ☆☆☆☆☆"]
		};
		const $classpoint = {	//about class
			//	剣	弓	槍	騎	術	殺	狂
			//	盾	裁	讐	分	月	降
			hp:[1.01, 0.98, 1.02, 0.96, 0.98, 0.95, 0.9,
				1.01, 1.0, 0.88, 0.96, 1.05, 1.0],
			atk:[1.01, 1.02, 0.98, 0.97, 0.94, 0.96, 1.03,
				0.99, 0.95, 1.05, 1.02, 0.94, 1.0],
			na:[1.5, 1.55, 1.45, 1.55, 1.6, 1.45, 1.4,
				1.5, 1.5, 1.45, 1.55, 1.6, 1.5],
			nd:[3, 3, 4, 3, 3, 4, 5,
				3, 3, 5, 4, 3, 3],
			sr:[10, 8, 12, 9, 11, 25, 5,
				10, 10, 6, 10, 15, 15],
			sw:[100, 150, 90, 200, 50, 100, 10,
				100, 100, 30, 100, 50, 150],
			dr:[35, 45, 40, 50, 60, 55, 65,
				35, 35, 10, 50, 1, 10]
		};
		const $statepoint = {
			hp:[1.1, 1.05, 1.0, 0.95, 0.9, 0.85],
			atk:[0.9, 0.95, 1.0, 1.05, 1.1, 0.85]
		};
		const $parapoint = {
			pp:[1.04,
			1.03, 1.025, 1.02, 1.015,
			1.01, 1.005, 1.0, 0.9975,
			0.995, 0.9925, 0.99, 0.9875,
			0.985, 0.9825, 0.98, 0.9775,
			0.975, 0.9725, 0.97, 0.9675],	//Parameter Point
			dr:[0.5,
			0.55, 0.575, 0.6, 0.625,
			0.65, 0.675, 0.7, 0.725,
			0.75, 0.775, 0.8, 0.825,
			0.85, 0.875, 0.9, 0.925,
			0.95, 0.975, 1.0, 1.025]	//Parameter Point (Death Rate)
		};
		var $RarityVisible = -1;
		var $Rarity = -1;
		var $ClassNumber = -1;
		var $Tendency = -1;
		var $Parameter = {STR:-1, CON:-1, AGI:-1, MGI:-1, LUC:-1};
		
		//=======================================
		//Check Rarity
		$RarityVisible = parseInt($('[name="Rare"]:checked').val());
		if($RarityVisible == 0){
			$Rarity = 2;
		}else{
			$Rarity = $RarityVisible;
		}
		console.log('レアリティ：' + $RarityVisible);
		$('#RareOut').html($rarepoint.name[$RarityVisible]);
		
		//Check Class
		$ClassNumber = $('select[name="Class"]')[0].selectedIndex;
		console.log('クラス：' + $('select[name="Class"]')[0].value);
		$('#ClassOut').html($('select[name="Class"]')[0][$ClassNumber].innerHTML);
		
		//Check Tendency of Status
		$Tendency = parseInt($('[name="State"]:checked').val()) - 1;
		
		//Check Parameter
		$Parameter.STR = $('select[name="Kin"]')[0].selectedIndex;
		$Parameter.CON = $('select[name="Tai"]')[0].selectedIndex;
		$Parameter.AGI = $('select[name="Bin"]')[0].selectedIndex;
		$Parameter.MGI = $('select[name="Mar"]')[0].selectedIndex;
		$Parameter.LUC = $('select[name="Kou"]')[0].selectedIndex;
		
		//=======================================
		document.getElementById("result1").style.visibility = "visible";
		document.getElementById("result2").style.visibility = "visible";
		document.getElementById("result3").style.visibility = "visible";
		
		//=======================================
		//ATK/HP
		var $hp = [];
		var $atk = [];
		var $atkrate = 0;
		var $grailrate = Math.floor(99000 / ($rarepoint.lvmax[$Rarity] - 1)) / 1000;
		
		if($('input[name="BM"]:checked').val() == "BMM"){
			$atkrate = $parapoint.pp[$Parameter.MGI];
		}else if($('input[name="BM"]:checked').val() == "BMB"){
			var agimgi = ($parapoint.pp[$Parameter.AGI] + $parapoint.pp[$Parameter.MGI]) / 2;
			$atkrate = $parapoint.pp[$Parameter.STR] * agimgi * (1 - (1 - $parapoint.pp[$Parameter.STR]) * (1 - agimgi));
		}
		
		$atk[0] = Math.floor($rarepoint.atklv1[$Rarity] * $classpoint.atk[$ClassNumber] * $statepoint.atk[$Tendency] * $atkrate);
		$atk[1] = Math.floor($rarepoint.atkmax[$Rarity] * $classpoint.atk[$ClassNumber] * $statepoint.atk[$Tendency] * $atkrate);
		$hp[0] = Math.floor($rarepoint.hplv1[$Rarity] * $classpoint.hp[$ClassNumber] * $statepoint.hp[$Tendency] * $parapoint.pp[$Parameter.CON]);
		$hp[1] = Math.floor($rarepoint.hpmax[$Rarity] * $classpoint.hp[$ClassNumber] * $statepoint.hp[$Tendency] * $parapoint.pp[$Parameter.CON]);
		$atk[2] = $atk[0] + Math.floor(($atk[1] - $atk[0]) * $grailrate);
		$hp[2] = $hp[0] + Math.floor(($hp[1] - $hp[0]) * $grailrate);
		
		$('#lvOut').html('LV' + $rarepoint.lvmax[$Rarity]);
		$('#ATKOut1').html($atk[0]);
		$('#ATKOut2').html($atk[1]);
		$('#ATKOut3').html($atk[2]);
		$('#HPOut1').html($hp[0]);
		$('#HPOut2').html($hp[1]);
		$('#HPOut3').html($hp[2]);
		
		//=======================================
		//NA(NP獲得率基本値)
		var $ArtsCount = parseInt($('[name="Arts"]:checked').val());
		var $Apoint;
		if($ArtsCount == 1){
			$Apoint=1.5;
		}else if($ArtsCount == 2){
			$Apoint=1.125;
		}else if($ArtsCount == 3){
			$Apoint=1.0;
		}
		
		var NA = Math.floor(100*$classpoint.na[$ClassNumber]*$parapoint.pp[$Parameter.MGI]*$Apoint/parseInt($('[name="AH"]:checked').val()))/100;
		$('#NAOut').html(NA + '%');
		
		//=======================================
		//ND
		$('#NDOut').html($classpoint.nd[$ClassNumber] + '%');
		
		//=======================================
		//SW(スター集中度)
		
		var SW = Math.floor($classpoint.sw[$ClassNumber]*$parapoint.pp[$Parameter.LUC]);
		$('#SWOut').html(SW);
		
		//=======================================
		//SR(スター発生率基本値)
		
		var SR;
		if($('[name="Star"]:checked').val() == "SR1"){
			SR=Math.floor(10*$classpoint.sr[$ClassNumber]*$parapoint.pp[$Parameter.AGI])/10;
		}else if($('[name="Star"]:checked').val() == "SR2"){
			SR=Math.floor(10*$classpoint.sr[$ClassNumber]*((1+$parapoint.pp[$Parameter.AGI])/2))/10;
		}
		$('#SROut').html(SR + '%');
		
		//=======================================
		//DR(即死率)
		
		var DR = Math.floor(10*$classpoint.dr[$ClassNumber]*$parapoint.dr[$Parameter.MGI])/10;
		$('#DROut').html(DR + '%');
		
		//=======================================
		})
	});
	