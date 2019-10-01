import cv2
import numpy as np
from matplotlib import pyplot as plt

img = cv2.imread('2.jpg',cv2.IMREAD_GRAYSCALE)
cv2.waitKey(1)
cv2.imshow('image',img)

cv2.destroyAllWindows()
