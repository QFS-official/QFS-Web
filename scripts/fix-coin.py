import re

with open('/home/z/my-project/src/components/qfs/qfs-coin.tsx', 'r') as f:
    content = f.read()

# Replace the coin container section
old = '''      {/* Coin container */}
      <motion.div
        className="relative z-10"
        style={{ rotateX, rotateY, width: size, height: size }}
        animate={{
          y: [0, -8, 0],
          rotateZ: [0, 360],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 20, repeat: Infinity, ease: 'linear' },
        }}
      >'''

new = '''      {/* Coin container */}
      <motion.div
        className="relative z-10"
        style={{ width: size, height: size }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <motion.div
          className="w-full h-full"
          style={{ transformStyle: 'preserve-3d', perspective: 800 }}
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >'''

content = content.replace(old, new)

# Now find the closing </motion.div> for the coin container and add an extra one
# The coin container ends before the energy particles section
# We need to close the inner motion.div before closing the outer one

old_end = '''        </motion.div>
      </motion.div>

      {/* Energy particles around coin */}'''

new_end = '''        </motion.div>
        </motion.div>
      </motion.div>

      {/* Energy particles around coin */}'''

content = content.replace(old_end, new_end)

with open('/home/z/my-project/src/components/qfs/qfs-coin.tsx', 'w') as f:
    f.write(content)

print('Done')
