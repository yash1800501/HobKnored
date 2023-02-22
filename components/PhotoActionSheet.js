import React from "react";

import ActionSheet from 'react-native-actionsheet';

// let actionSheet = React.useRef();
const PhotoActionSheet = () => {
    let actionSheet = React.useRef();
    const showActionSheet = () => {
        //To show the Bottom ActionSheet
        actionSheet.current.show();
    };
    var optionArray = ['Photo Library', 'Camera', 'Cancel'];
    const [imageUri, setimageUri] = React.useState('');
    var uri = imageUri;

    const openGallery = () => {
        let option = {
            storageOption: {
                path : 'image',
                mediaType: 'photo',
            },
            includeBase64: true,
        }
        launchImageLibrary(option,response => {
            if(response.didCancel) {
                console.log('User cancle the Image Picker');
                setArrayCount(arrayCount);
            }
            else if(response.error) {
                console.log('ImagePicker error = ', response.error);
            }
            else if(response.customButtom) {
                console.log('User tab on customButton', response.customButtom);
            }
            else if(response.assets) {
                const source = {uri: response.assets[0].uri};
                setimageUri(source);
                setselectedArray(selectedArray.concat(imageUri));
                setArrayCount(arrayCount+1);
            }
            else {
                const source = {uri: response.assets[0].uri};
                setimageUri(source);
                setselectedArray(selectedArray.concat(imageUri));
            }
        });
    };

    const openCamera = () => {
        let option = {
            storageOption: {
                path : 'image',
                mediaType: 'photo',
            },
            includeBase64: true,
        }
        launchCamera(option,response => {
            console.log('Response = ', response);
            if(response.didCancel) {
                console.log('User cancle the Image Picker');
            }
            else if(response.error) {
                console.log('ImagePicker error = ', response.error);
            }
            else if(response.customButtom) {
                console.log('User tab on customButton', response.customButtom);
            }
            else if(response.assets) {
              const source = {uri: response.assets[0].uri};
              setimageUri(source);
              setselectedArray(selectedArray.concat(imageUri));
              setArrayCount(arrayCount+1);
          }
        });
    };
    return(
            <ActionSheet
                ref={actionSheet}
                // Title of the Bottom Sheet
                title={'Profile Photo'}
                // Options Array to show in bottom sheet
                options={optionArray}
                // Define cancel button index in the option array
                // This will take the cancel option in bottom
                // and will highlight it
                cancelButtonIndex={2}
                // Highlight any specific option
                destructiveButtonIndex={3}
                onPress={(index) => {
                    // Clicking on the option will give you alert
                    if(index === 0)
                    {
                    openGallery();
                    }
                    else if(index === 1)
                    {
                    openCamera();
                    }
                }}
            />
    );
}

export default PhotoActionSheet;