<?php
    switch ($_GET["langue"]) {
        case 'fr':
            echo "Page en français";
            break;
        case 'en':
            echo "Page en anglais";
            break;
        case 'esp':
            echo "Page en espagnol";
            break;
        
        default:
            echo "Langue inconnue";
            break;
    }
?>