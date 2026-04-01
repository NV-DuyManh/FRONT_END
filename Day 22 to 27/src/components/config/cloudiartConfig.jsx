import React from 'react';

export const uploadImageToCloudinary = async (imgFile, folderName) => {
    const formData = new FormData();
    formData.append('file', imgFile);
    formData.append('upload_preset', 'ReactJS'); // Replace 'vamfilm' with your actual unsigned upload preset name
    formData.append('cloud_name', 'duuujvsz7'); // Replace 'dymypfkt4' with your actual Cloudinary cloud name

    // Set the folder parameter
    if (folderName) {
        formData.append('folder', folderName); // Specify folder name for organized storage
    }

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/duuujvsz7/image/upload`, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        return data.secure_url; // Return the image URL from Cloudinary
    } catch (error) {
        console.error('Upload failed:', error);
        throw error;
    }
};