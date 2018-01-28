var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3({
  username: '4483bc15-18ce-4e81-9bfd-0afd1fb712ff',
  password: 'xbT6broyHT7u',
  version_date: '2017-09-21'
});

module.exports = {
  analyzeTone: function(newsText, callback) {
    var params = {
      tone_input: newsText,
      content_type: 'text/plain'
    };

    tone_analyzer.tone(params, function(err, tone) {
      var tones = [];
      if (tone) {
        if (tone.document_tone) tones = tone.document_tone.tones;
      }
      callback(err, tones);
    });
  }
};
