


function isValidYouTubeIframe(iframeCode) {
  // Regular expression pattern to match a YouTube iframe URL
  const youtubeIframePattern = /<iframe.*?src=["'](https?:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]+))["']/i;

  // Attempt to match the provided iframe code with the pattern
  const match = iframeCode.match(youtubeIframePattern);

  if (match && match.length >= 3) {
    // Extracted video ID from the URL
    const videoId = match[2];
    return videoId; // Return the video ID for further processing if needed
  }

  return false; // Invalid YouTube iframe
}
