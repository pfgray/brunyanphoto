<?php
  function custom_rewrite_basic() {
    add_rewrite_rule('*', 'index.php', 'top');
  }
  add_action('init', 'custom_rewrite_basic');
 ?>