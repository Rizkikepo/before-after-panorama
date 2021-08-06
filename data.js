var APP_DATA = {
	scenes: [
		{
			id: '0-gs__center_before',
			name: 'GS__Center_Before',
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
			],
			faceSize: 1440,
			initialViewParameters: {
				yaw: -0.009886837503719548,
				pitch: -0.021816161243531695,
				fov: 0.9091582893130661,
			},
			linkHotspots: [
				{
					yaw: 0.25494482122874373,
					pitch: 0.005633798250668676,
					rotation: 0,
					target: '1-gs__center_after',
					imgSrc: 'img/after-link.png',
				},
				{
					yaw: -1.0401941698170205,
					pitch: 0.04663121431343953,
					rotation: 0,
					target: '2-gs__left_before',
					imgSrc: 'img/link.png',
				},
				{
					yaw: 1.4584123027217695,
					pitch: 0.053011766833646945,
					rotation: 0,
					target: '4-gs__right_before',
					imgSrc: 'img/link.png',
				},
			],
			infoHotspots: [],
		},
		{
			id: '1-gs__center_after',
			name: 'GS__Center_After',
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
			],
			faceSize: 1440,
			initialViewParameters: {
				yaw: 0.30276119677452407,
				pitch: 0,
				fov: 1.3845933826976107,
			},
			linkHotspots: [
				{
					yaw: 0.34943408826182143,
					pitch: 0.012647239463220217,
					rotation: 0,
					target: '0-gs__center_before',
					imgSrc: 'img/before-link.png',
				},
				{
					yaw: -1.016494071776318,
					pitch: 0.04383505274192245,
					rotation: 0,
					target: '3-gs__left_after',
					imgSrc: 'img/link.png',
				},
				{
					yaw: 1.5066673039270126,
					pitch: 0.08500360362219972,
					rotation: 0,
					target: '5-gs__right_after',
					imgSrc: 'img/link.png',
				},
			],
			infoHotspots: [],
		},
		{
			id: '2-gs__left_before',
			name: 'GS__Left_Before',
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
			],
			faceSize: 1440,
			initialViewParameters: {
				yaw: 0.5643306432737774,
				pitch: -0.014750639410731736,
				fov: 1.3845933826976107,
			},
			linkHotspots: [
				{
					yaw: 1.4311711825987974,
					pitch: 0.017774251482395087,
					rotation: 0,
					target: '0-gs__center_before',
					imgSrc: 'img/link.png',
				},
				{
					yaw: 0.37985802570677407,
					pitch: 0.016982613252981338,
					rotation: 0,
					target: '3-gs__left_after',
					imgSrc: 'img/after-link.png',
				},
			],
			infoHotspots: [],
		},
		{
			id: '3-gs__left_after',
			name: 'GS__Left_After',
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
			],
			faceSize: 1440,
			initialViewParameters: {
				yaw: 0.5734653256552811,
				pitch: -0.012292199508943114,
				fov: 1.3845933826976107,
			},
			linkHotspots: [
				{
					yaw: 0.39993291657376595,
					pitch: -0.01123720193112554,
					rotation: 0,
					target: '2-gs__left_before',
					imgSrc: 'img/before-link.png',
				},
				{
					yaw: 1.4404592521849926,
					pitch: 0.004369564091552647,
					rotation: 0,
					target: '1-gs__center_after',
					imgSrc: 'img/link.png',
				},
			],
			infoHotspots: [],
		},
		{
			id: '4-gs__right_before',
			name: 'GS__Right_Before',
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
			],
			faceSize: 1440,
			initialViewParameters: {
				yaw: 0.3455034196600586,
				pitch: 0.029501278821463472,
				fov: 1.3845933826976107,
			},
			linkHotspots: [
				{
					yaw: -0.8934930447274532,
					pitch: 0.049147402795366446,
					rotation: 0,
					target: '0-gs__center_before',
					imgSrc: 'img/link.png',
				},
				{
					yaw: 0.24521137979055752,
					pitch: -0.023398303058602465,
					rotation: 0,
					target: '5-gs__right_after',
					imgSrc: 'img/after-link.png',
				},
			],
			infoHotspots: [],
		},
		{
			id: '5-gs__right_after',
			name: 'GS__Right_After',
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
			],
			faceSize: 1440,
			initialViewParameters: {
				yaw: 0.4381145453464548,
				pitch: 0.022124186487214814,
				fov: 1.3845933826976107,
			},
			linkHotspots: [
				{
					yaw: 0.27070412888074635,
					pitch: 0.004916879803577245,
					rotation: 0,
					target: '4-gs__right_before',
					imgSrc: 'img/before-link.png',
				},
				{
					yaw: -0.8734444314230334,
					pitch: 0.03060266939751166,
					rotation: 0,
					target: '1-gs__center_after',
					imgSrc: 'img/link.png',
				},
			],
			infoHotspots: [],
		},
	],
	name: 'Project Title',
	settings: {
		mouseViewMode: 'drag',
		autorotateEnabled: false,
		fullscreenButton: false,
		viewControlButtons: false,
	},
};
