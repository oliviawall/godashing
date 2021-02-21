import { string, number, bool, arrayOf, func, array, object, oneOfType, any } from 'prop-types';

export const API_KEY = 'a293c346773385bae50fb960f2210d2d';
export const VIDEO_TOKEN = 'eb6c0ea4f9e69746c342f40703f76e30';
export const VIDEO_TOKEN_2 = 'eb6c0ea4f9e69746c342f40703f76e30';
export const VIDEO_TOKEN_3 = 'eb6c0ea4f9e69746c342f40703f76e30';
export const videos = [
    {video: VIDEO_TOKEN},
    {video: VIDEO_TOKEN_2},
    {video: VIDEO_TOKEN_3}

];


// ####################### Player/Recorder Attributes #############################
// When using HTML embed methods, all parameters should be prefixed with ziggeo-
// https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters#javascript-revision=v1-r29&javascript-version=v2
export const ziggeoRecorderAttributesPropTypes = {
    // Presentational parameters
    'width': oneOfType([number, string]),
    'height': oneOfType([number, string]),
    'responsive': bool,
    'faceoutline': bool,
    'skipinitial': bool,
    'skipinitialonrerecord': bool,
    'picksnapshots': bool,
    'countdown': number,
    'stream-width': number,
    'stream-height': number,
    'nofullscreen': bool,
    'snapshotmax': number,
    'gallerysnapshots': number,
    'localplayback': bool,
    'stretch': bool,
    'stretchwidth': bool,
    'stretchheight': bool,
    'theme': string,
    'themecolor': string,
    'autorecord': bool,
    'primaryrecord': bool,
    'flip-camera': bool,
    "flipscreen": bool, // Will affect as true, if flip-camera also set as true
    'early-rerecord': bool,
    'sharevideo': arrayOf(string),
    'transcript-language': string,
    'allowtexttrackupload': bool,
    'uploadlocales': array,
    'audio-test-mandatory':bool,
    'playermodeifexists': bool,
    'rerecordableifexists': bool,
    'preview-effect-profile': string,
    'popup-width': oneOfType([number, string]),
    'popup-height': oneOfType([number, string]),
    'snapshotfrommobilecapture': bool,

    // Security parameters
    'server-auth': string,
    'client-auth': string,
    'expiration-days': number,

    // Video management parameters
    'recordingwidth': number,
    'recordingheight': number,
    'minuploadingwidth': number,
    'maxuploadingwidth': number,
    'minuploadingheight': number,
    'maxuploadingheight': number,
    'video': string,
    'auto-crop': bool,
    'auto-pad': bool,
    '_key': string,
    "rtmpstreamtype": string,
    "rtmpmicrophonecodec": string,
    'timelimit': number,
    'timeminlimit': number,
    'video-profile': oneOfType([string, arrayOf(string)]),
    'effect-profile': oneOfType([string, arrayOf(string)]),
    'meta-profile': oneOfType([string, arrayOf(string)]),
    'enforce-duration': bool,
    'noaudio': bool,
    'source':	string,
    'framerate': number,
    'framerate-warning': string,
    'snapshottype': string,
    'videobitrate': oneOfType([number, string]),
    'audiobitrate': oneOfType([number, string]),
    'microphone-volume': number,
    'custom-covershots': bool,
    'selectfirstcovershotonskip': bool,
    'picksnapshotmandatory': bool,
    'pausable': bool,
    'snapshotfromuploader': bool,
    'allowmultistreams': bool,
    'multistreamreversable': bool,
    'multistreamdraggable': bool,
    'multistreamresizeable': bool,
    'addstreamproportional': bool,
    'addstreampositionx': number,
    'addstreampositiony': number,
    'addstreampositionwidth': number,
    'addstreampositionheight': number,
    'addstreamminwidth': number,
    'addstreamminheight': number,
    'fullscreenmandatory': bool,
    'fittodimensions': bool,

    // Data parameters
    // 'tags': arrayOf(string),
    'tags': ['test', 'test1'],
    'custom-data':	object,
    'title':	string,
    'description': string,

    // Operational parameters
    'manual_upload': bool,
    'rerecordable':	bool,
    'allowupload': bool,
    'allowscreen': bool,
    'allowrecord':	bool,
    'display-timer': bool,
    'force-overwrite':	bool,
    'autoplay': bool,
    'recordings':	number,
    'allowedextensions': arrayOf(string),
    'application': string, //	oneOfType([object, string]),
    'filesizelimit': number,
    'flashincognitosupport': bool,
    'simulate': bool,
    'allowcustomupload': bool,
    'manual-upload': bool,
    'camerafacefront': bool,
    'createthumbnails': bool,
    'skipseconds': number,
    'showsettingsmenu': bool, // As a property show/hide from users
    'hidevolumebar': bool,
    'recordermode': bool,
    'forceflash': bool,
    'noflash': bool,
    'manualsubmit': bool,
    'initialseek': number,
    'playfullscreenonmobile': bool,
    'playwhenvisible': bool,
    'playonclick': bool,
    'disableseeking': bool,
    'disablepause': bool,
    'pauseonplay': bool,
    'onlyaudio': bool,
    'airplay': bool,
    'chromecast': bool,
    'preload': bool,
    'delete-old-streams': bool,
    'lazy-application': bool,
    'allowcancel': bool,
    'orientation': string,
    'popup': bool,
    'popup-stretch': bool,

    // Form and HTML parameters
    'input-bind': string,
    'form-accept': string
};

export const ziggeoPlayerAttributesPropTypes = {
    // Presentational parameters
    'width': oneOfType([number, string]),
    'height': oneOfType([number, string]),
    'responsive': bool,
    'skipinitial': bool,
    'picksnapshots': bool,
    'countdown': number,
    'stream-width': number,
    'stream-height': number,
    'nofullscreen': bool,
    'localplayback': bool,
    'theme': string,
    'themecolor': string,
    'sharevideo':	arrayOf(string),
    'loop': bool,
    'loopall': bool,
    'volume': number,
    'showduration': bool,
    'uploadlocales': array,
    'allowtexttrackupload': bool,
    'audio-transcription-as-subtitles': bool,
    'playlist': oneOfType([array, string]),
    'popup': bool,
    'popup-stretch': bool,
    'popup-width': oneOfType([number, string]),
    'popup-height': oneOfType([number, string]),

    // Security parameters
    'server-auth': string,
    'client-auth': string,
    'stretch': bool,
    'hideoninactivity': bool,
    'hidebarafter': number, // in milliseconds
    'preventinteraction': bool,
    'stretchwidth': bool,
    'stretchheight': bool,

    // Video management parameters
    'video': string.isRequired,
    'stream': string,
    '_key': string,
    'effect-profile': oneOfType([string, arrayOf(string)]),
    'video-profile': oneOfType([string, arrayOf(string)]),
    'noaudio': bool,
    'poster': string,
    'source':	string,
    'framerate': number,
    'videobitrate': oneOfType([number, string]),
    'audiobitrate': oneOfType([number, string]),

    // Data parameters
    'tags': arrayOf(string),
    'custom-data':	object,
    'title':	string,
    'description': string,

    // Operational parameters
    'allowpip': oneOfType([bool, func]), // Disable Picture-In-Picture by default, Has to be boolean. Need present func also because of Ziggeo internally used as function
    'autoplay': bool,
    'application': string, // oneOfType([object, string]),
    'flashincognitosupport': bool,
    'forceflash': bool,
    'noflash': bool,
    'initialseek': number,
    'playfullscreenonmobile': bool,
    'playwhenvisible': bool,
    'playonclick': bool,
    'disableseeking': bool,
    'disablepause': bool,
    'pauseonplay': bool,
    'onlyaudio': bool,
    'airplay': bool,
    'chromecast': bool,
    'preload': bool,
    'lazy-application': bool,
    'preroll': bool,
    'vast': arrayOf(object),

    // Form and HTML parameters
    'input-bind': string,
    'form-accept': string

    // // handle special cases
    // handleVideo: function(props, propName, componentName) {
    //     if( (props['video'] === undefined || props['video'].length < 1) &&
    //         (props['video-profile'] === undefined || props['video-profile'].length < 1)
    //     ) {
    //         return new Error(
    //             'Please provide with video or video-profile token to component' +
    //             ' `' + componentName + '`. Validation failed'
    //         )
    //     }
    // },
};

// #######################  DEFAULTS  ##################################


// #######################  EMBEDDING EVENTS #############################
// Javascript Embed Recorder Events
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/application-embedding-events#javascript-revision=v1-r29
// application.embed_event.on..
export const ziggeoRecorderEmbeddingEventsPropTypes = {
    onPlaying: func,
    onPaused: func,
    onEnded: func,
    onSeek: func,
    onManuallySubmitted: func,
    onRecordingProgress: func,
    onUploaded: func,
    onUploadSelected: func,
    onUploading: func,
    onRerecord: func,
    onCountdown: func,
    onProgress: func,
    onUploadProgress: func,
    onProcessing: func,
    onProcessed: func,
    onAccessForbidden: func,
    onAccessGranted: func,
    onCameraUnresponsive: func,
    onVerified: func,
    onNoCamera: func,
    onNoMicrophone: func,
    onRef: func
};

export const ziggeoPlayerEmbeddingEventsPropTypes = {
    onPlaying: func,
    onPaused: func,
    onEnded: func,
    onSeek: func,
    onReadyToPlay: func,
    onRef: func
};

export const ziggeoCommonEmbeddingEventsPropTypes = {
    onAttached: func,
    onRecording: func,
    onLoaded: func,
    onError: func
};

// #######################  ZIGGEO METHODS  ##############################
// Methods
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/methods#javascript-revision=v1-r29&javascript-version=v2
export const ziggeoMethods = {
    play: func,
    record: func,
    upload: func,
    rerecord: func,
    stop: func,
    stopRecord: func,
    hidePopup: func,
    reset: func,
    lightLevel: func,
    soundLevel: func,
    averageFrameRate: func,
    isRecording: func,
    width: func,
    height: func,
    isFlash: func,
    videoWidth: func,
    videoHeight: func,
    destroy: func
};


// #######################    ##############################
// Common Events
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/events#javascript-revision=v1-r29&javascript-version=v2
export const ziggeoApiEventsPropTypes = {
    onEventPlay: func,
    onEventPause: func,
    onEventStop: func,
    onEventErrorPlayer: func,
    onEventSubmitted: func,
    onEventPlayerSeek: func,
    onEventManuallySubmitted: func,
    onEventUploaded: func,
    onEventUploadSelected: func,
    onEventRecording: func,
    onEventUploading: func,
    onEventFinished: func,
    onEventDiscarded: func,
    onEventErrorRecorder: func,
    onEventCountdown: func,
    onEventElapsed: func,
    onEventUploadProgress: func,
    onEventProcessingProgress: func,
    onEventReadyToRecord: func,
    onEventReadyToPlay: func,
    onEventAccessForbidden: func,
    onEventAccessGranted: func,
    onEventAccessRevoked: func,
    onEventRecorderProcessed: func
};

// #######################  React Common Options  ##############################
export const reactCustomOptions = {
    preventReRenderOnUpdate: bool,
    updateInstance: any,
};

// ####################### Application Events #############################
// application.embed_event.on..
export const ziggeoApplicationEvents = {
    onError: func,
    onReady: func
};

export const ziggeoRecorderApplicationOptions = {
    // application options
    webrtc_streaming: bool,
    webrtc_streaming_if_necessary: bool,
    webrtc_on_mobile: bool,
    auth: bool,
    debug: bool,
    testing_application: bool,

    // screenoptions
    chrome_extension_id: string,
    chrome_extension_install_link: string,
    opera_extension_id: string,
    opera_extension_install_link: string
};

export const ziggeoPlayerApplicationOptions = {
    // application options
    debug: bool,
    testing_application: bool,
    auth: bool
};

export const screenRecorderOptions = {
};
// export const video_list = 
//     app.videos.index({tags:"email"}).success(

// 	function(video_list){

// 		for(i = 0, l = video_list.length; i < l; i++)

// 			{

		
// 		var player_container = document.createElement("div");
		
		
// 		var player = new ZiggeoApi.V2.Player({
// 									element: player_container,
// 									attrs: {
										
// 										theme: "modern",
// 										themecolor: "red",
// 										video: video_list[i].token
// 									}
// 								});
// 		document.getElementById("V2_players").appendChild(player_container);

		

// 		player.activate();

		
			
// 			}

				

//     });

