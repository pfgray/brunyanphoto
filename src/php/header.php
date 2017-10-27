<?php 
global $post;
global $part_url;
$part_url=$wp->request;
// echo var_dump();
function isActive($path){
  global $part_url;
  if(0 === strpos("/".$part_url, $path)){
    echo "active";
  }
}
?>
<link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/custom_styles.css" type="text/css">
<div class='header'>
  <a href="/portfolio" class="<?php isActive('/portfolio') ?>">Portfolio</a>
  <a href="/pricing" class="<?php isActive('/pricing') ?>">Pricing</a>
  <a href="/about" class="<?php isActive('/about') ?>">About</a>
  <a href="/blog" class="<?php isActive('/blog') ?>">Blog</a>
  <div class='social'>
    <a href='https://www.facebook.com/BethanneRunyanPhotography'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g>
          <path fill="#fff" d="M432.25 138.5c0-30.87-27.87-58.75-58.75-58.75h-235c-30.88 0-58.75 27.88-58.75 58.75v235c0 30.87 27.87 58.75 58.75 58.75H256V299.08h-43.08v-58.75H256v-22.9c0-39.46 29.64-75.02 66.1-75.02h47.5v58.8h-47.5c-5.2 0-11.27 6.3-11.27 15.76v23.4h58.76v58.75h-58.8v133.17h62.66c30.87 0 58.74-27.88 58.74-58.75v-235z"/>
        </g>
      </svg>
    </a>
    <a href='https://instagram.com/bethannerunyan/'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path fill="#fff" style="text-indent:0;text-align:start;line-height:normal;text-transform:none;block-progression:tb;-inkscape-font-specification:Sans" d="M 11.46875 5 C 7.9162454 5 5 7.9154247 5 11.46875 L 5 20.53125 C 5 24.083755 7.9154247 27 11.46875 27 L 20.53125 27 C 24.083755 27 27 24.084575 27 20.53125 L 27 11.46875 C 27 7.9162454 24.084575 5 20.53125 5 L 11.46875 5 z M 11.46875 7 L 20.53125 7 C 23.003925 7 25 8.9972546 25 11.46875 L 25 20.53125 C 25 23.003925 23.002745 25 20.53125 25 L 11.46875 25 C 8.9960753 25 7 23.002745 7 20.53125 L 7 11.46875 C 7 8.9960753 8.9972546 7 11.46875 7 z M 21.90625 9.1875 C 21.404224 9.1875 21 9.5917228 21 10.09375 C 21 10.595776 21.404224 11 21.90625 11 C 22.408277 11 22.8125 10.595776 22.8125 10.09375 C 22.8125 9.5917228 22.408277 9.1875 21.90625 9.1875 z M 16 10 C 12.698136 10 10 12.698136 10 16 C 10 19.301864 12.698136 22 16 22 C 19.301864 22 22 19.301864 22 16 C 22 12.698136 19.301864 10 16 10 z M 16 12 C 18.220984 12 20 13.779016 20 16 C 20 18.220984 18.220984 20 16 20 C 13.779016 20 12 18.220984 12 16 C 12 13.779016 13.779016 12 16 12 z" overflow="visible" font-family="Sans"/>
      </svg>
    </a>
  </div>
</div>