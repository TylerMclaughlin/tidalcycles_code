import numpy as np
import matplotlib.pyplot as plt

def egg(a,b, theta ):
    num = a**2 + (b**2)*(np.tan(theta)**2)
    denom = 1 + np.tan(theta)**2
    result =  np.sqrt(num/denom)
    return result



x = np.linspace(-1*np.pi, 1*np.pi, 1000)
#x = np.linspace(-0.5*np.pi, 0.5*np.pi, 1000)
plt.plot(x, egg(1, 2, x))
#plt.plot(x, np.tan(x)*np.tan(x))
plt.show()
