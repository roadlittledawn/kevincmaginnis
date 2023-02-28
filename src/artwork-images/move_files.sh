#!/bin/bash

# Set the source directory where the files are currently located
SOURCE_DIR="./"

# Set the destination directory where the files will be moved to
DEST_DIR="./"

# Use the find command to locate all files in the source directory and its subdirectories
find "$SOURCE_DIR" -type f -print0 |

# Use the xargs command to move the files to the destination directory
xargs -0 -I {} mv {} "$DEST_DIR"
