<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

    <script type="text/javascript" src="assets/js/3deye.js"></script>

</head>
<body>
<div id="demo" style="max-height: 250px;max-width: 100%;text-align: center">

</div>


<script type="text/javascript">


    $(document).ready(function(){



        $("#demo").vc3dEye({

            imagePath:"phonephoto/", // the location where you’ve put the images.

        totalImages:18, // the number of images you have.

        imageExtension:"jpeg" // the extension of the images. Make sure all the images have same extension.

    });



    });



</script>

</body>
</html>